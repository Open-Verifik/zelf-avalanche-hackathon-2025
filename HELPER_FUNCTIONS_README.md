# Helper Functions for ZelfProof QR Code Decryption

This document describes the helper functions created to decrypt QR codes and extract zelfProof data for IPFS storage.

## Overview

When using `ZelfProofModule.encryptQRCode()`, the response may contain:
- `zelfQR`: A base64-encoded QR code image (data URL)
- `zelfProof`: The original zelfProof string (if available)

For IPFS storage, you often need both the QR code image and the zelfProof string. These helper functions help you extract and decrypt the necessary data.

**Key Feature**: The functions now attempt to extract the zelfProof string directly from the QR code binary data first, before falling back to API decryption.

## Available Functions

### 1. `extractDataFromDataUrl(dataUrl)`

Extracts MIME type and base64 data from a data URL.

**Parameters:**
- `dataUrl` (string): Base64 data URL (e.g., "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...")

**Returns:**
```javascript
{
  mimeType: "image/png",
  base64Data: "iVBORw0KGgoAAAANSUhEUgAA...",
  isValid: true
}
```

**Example:**
```javascript
const { extractDataFromDataUrl } = require("./Utilities/helper.module");

const qrCodeDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...";
const result = extractDataFromDataUrl(qrCodeDataUrl);

if (result.isValid) {
  console.log("MIME Type:", result.mimeType);
  console.log("Base64 Data:", result.base64Data);
}
```

### 2. `extractZelfProofFromQRCode(qrCodeDataUrl)` ⭐ **NEW**

Extracts the zelfProof string directly from the QR code binary data without needing API decryption.

**Parameters:**
- `qrCodeDataUrl` (string): QR code data URL (base64 encoded image)

**Returns:**
```javascript
{
  success: true,
  zelfProof: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  qrCodeData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  extractionMethod: "direct_from_qr_binary",
  message: "ZelfProof string extracted directly from QR code binary data"
}
```

**How it works:**
1. Decodes the base64 data URL to get binary data
2. Converts binary data to string to access embedded content
3. Uses pattern matching to find JWT tokens, base64 strings, or other zelfProof patterns
4. Extracts the zelfProof string directly from the QR code data

**Example:**
```javascript
const { extractZelfProofFromQRCode } = require("./Utilities/helper.module");

const qrCodeDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...";
const result = extractZelfProofFromQRCode(qrCodeDataUrl);

if (result.success) {
  console.log("ZelfProof extracted:", result.zelfProof);
  console.log("Method:", result.extractionMethod);
} else {
  console.log("Extraction failed:", result.error);
}
```

### 3. `extractZelfProofForIPFS(encryptedResponse)`

Attempts to extract the zelfProof string from the encrypted response, using direct extraction first.

**Parameters:**
- `encryptedResponse` (Object): Response from `ZelfProofModule.encryptQRCode()`

**Returns:**
```javascript
{
  success: true,
  zelfProof: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  message: "ZelfProof string extracted from QR code binary data"
}
```

**Extraction Strategy:**
1. **First**: Check if `zelfProof` is directly available in the response
2. **Second**: If only `zelfQR` is available, try direct extraction from QR code binary data
3. **Third**: If direct extraction fails, mark as requiring decryption

**Example:**
```javascript
const { extractZelfProofForIPFS } = require("./Utilities/helper.module");

const encryptedResponse = await ZelfProofModule.encryptQRCode({
  publicData,
  metadata,
  faceBase64,
  password: masterPassword,
  identifier: "password",
  requireLiveness: true,
  tolerance: "REGULAR",
  os: "DESKTOP"
});

const result = extractZelfProofForIPFS(encryptedResponse);

if (result.success) {
  // Store zelfProof string to IPFS
  const ipfsResult = await pinata.pinJSON({
    zelfProof: result.zelfProof,
    metadata: publicData
  });
} else if (result.requiresDecryption) {
  // Direct extraction failed, need to use API decryption
  console.log("Direct extraction failed:", result.extractionError);
}
```

### 4. `decryptQRCodeForIPFS(encryptedResponse, faceBase64, password, ZelfProofModule)`

Decrypts a QR code to extract the zelfProof string when direct extraction fails.

**Parameters:**
- `encryptedResponse` (Object): Response from `ZelfProofModule.encryptQRCode()`
- `faceBase64` (string): User's face for decryption
- `password` (string): User's master password
- `ZelfProofModule` (Object): ZelfProof module instance

**Returns:**
```javascript
{
  success: true,
  zelfProof: "decrypted_zelf_proof_string_here",
  qrCode: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
  extractionMethod: "direct_from_qr_binary" | "api_decryption",
  message: "ZelfProof string extracted successfully"
}
```

**Decryption Strategy:**
1. **First**: Try direct extraction from QR code binary data
2. **Second**: If direct extraction fails, fall back to API decryption
3. **Returns**: The extraction method used for transparency

**Example:**
```javascript
const { decryptQRCodeForIPFS } = require("./Utilities/helper.module");

const decryptionResult = await decryptQRCodeForIPFS(
  encryptedResponse,
  faceBase64,
  masterPassword,
  ZelfProofModule
);

if (decryptionResult.success) {
  console.log("Extraction method:", decryptionResult.extractionMethod);
  console.log("ZelfProof string:", decryptionResult.zelfProof);
  
  // Store both to IPFS
  await storeToIPFS(qrCode, decryptionResult.zelfProof);
}
```

## Complete Usage Example

Here's how to use these functions together in a real scenario:

```javascript
const { extractZelfProofForIPFS, decryptQRCodeForIPFS } = require("./Utilities/helper.module");

const storePasswordWithIPFS = async (data) => {
  try {
    const { website, username, password, faceBase64, masterPassword } = data;
    
    // Encrypt using ZelfProof module
    const encryptedResponse = await ZelfProofModule.encryptQRCode({
      publicData: { type: "website_password", website, timestamp: new Date().toISOString() },
      metadata: { username, password },
      faceBase64,
      password: masterPassword,
      identifier: "password",
      requireLiveness: true,
      tolerance: "REGULAR",
      os: "DESKTOP"
    });

    // Step 1: Try to extract zelfProof directly (fastest method)
    const extractionResult = extractZelfProofForIPFS(encryptedResponse);
    
    let zelfProofString = null;
    let extractionMethod = null;
    
    if (extractionResult.success) {
      // Great! We extracted the zelfProof directly from QR code binary data
      zelfProofString = extractionResult.zelfProof;
      extractionMethod = "direct_extraction";
      console.log("✅ ZelfProof extracted directly from QR code!");
    } else if (extractionResult.requiresDecryption) {
      // Direct extraction failed, fall back to API decryption
      console.log("⚠️ Direct extraction failed, using API decryption");
      
      const decryptionResult = await decryptQRCodeForIPFS(
        encryptedResponse,
        faceBase64,
        masterPassword,
        ZelfProofModule
      );
      
      if (decryptionResult.success) {
        zelfProofString = decryptionResult.zelfProof;
        extractionMethod = decryptionResult.extractionMethod;
        console.log("✅ ZelfProof extracted via API decryption");
      } else {
        console.log("❌ All extraction methods failed");
      }
    } else {
      console.log("❌ Failed to extract zelfProof:", extractionResult.error);
    }

    // Store QR code to IPFS
    let qrCodeIPFS = null;
    if (encryptedResponse.zelfQR) {
      qrCodeIPFS = await pinata.pinFile(
        encryptedResponse.zelfQR,
        `password_${website}_${Date.now()}.png`,
        "image/png",
        { contentType: "qr_code" }
      );
    }

    // Store zelfProof string to IPFS
    let zelfProofIPFS = null;
    if (zelfProofString) {
      zelfProofIPFS = await pinata.pinJSON({
        zelfProof: zelfProofString,
        metadata: { 
          contentType: "zelf_proof_string",
          extractionMethod: extractionMethod
        }
      }, `password_${website}_${Date.now()}_proof.json`);
    }

    return {
      success: true,
      qrCode: encryptedResponse.zelfQR,
      zelfProofString: zelfProofString,
      extractionMethod: extractionMethod,
      ipfs: {
        qrCode: qrCodeIPFS,
        zelfProof: zelfProofIPFS
      }
    };
    
  } catch (error) {
    console.error("Error storing password:", error);
    throw error;
  }
};
```

## Performance Benefits

- **Direct extraction**: Fastest method, extracts zelfProof directly from QR code binary data
- **API decryption fallback**: Only used when direct extraction fails
- **Reduced API calls**: Minimizes network requests to ZelfProof service
- **Better user experience**: Faster response times for successful extractions

## Testing

Run the test file to see these functions in action:

```bash
node test-helper-functions.js
```

The test file now includes tests for the new direct extraction functionality.

## Notes

- **Direct extraction** is the preferred method and is attempted first
- **API decryption** is only used as a fallback when direct extraction fails
- All functions return structured responses with extraction method information
- The functions handle various response formats gracefully
- Error handling is built-in with descriptive error messages

## Error Handling

All functions return structured responses with error information:

```javascript
{
  success: false,
  error: "Error message here",
  message: "User-friendly message",
  extractionError: "Specific extraction error details" // For extraction failures
}
```

Check the `success` property and handle errors appropriately in your application.
