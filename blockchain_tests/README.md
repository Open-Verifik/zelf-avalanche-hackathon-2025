# Blockchain Tests Documentation 🧪

This directory contains comprehensive test scripts for the ZelfKey NFT blockchain integration on Avalanche.

## 📁 Test Files Overview

### 1. `test-nft-minting-proper.js` ⭐ **MAIN TEST**
**Purpose**: Complete NFT minting test with proper metadata structure and image rendering.

**What it tests**:
- ✅ Master wallet setup and balance verification
- ✅ Contract connection and validation
- ✅ NFT metadata creation with correct structure
- ✅ IPFS metadata upload via Pinata
- ✅ Proper tokenURI pointing to metadata JSON
- ✅ Gas estimation and transaction execution
- ✅ NFT minting to specified recipient
- ✅ Image rendering compatibility

**Key Features**:
- Uses environment variables for sensitive data
- Follows ERC-721 NFT standards
- Proper metadata → image URL structure
- Real mainnet transactions
- Gas fee calculation and coverage

### 2. `simple-metadata-test.js` 📋 **METADATA VALIDATION**
**Purpose**: Educational test to understand NFT metadata structure.

**What it tests**:
- ✅ Metadata JSON creation
- ✅ IPFS upload verification
- ✅ URL structure validation
- ✅ NFT standard compliance explanation

**Key Features**:
- Educational output with explanations
- Metadata structure visualization
- URL validation testing
- No blockchain transactions (IPFS only)

### 3. `test-nft-minting.js` 🔧 **LEGACY TEST**
**Purpose**: Initial test implementation (kept for reference).

**What it tests**:
- ✅ Basic NFT minting functionality
- ❌ Incorrect tokenURI structure (points to image directly)

**Note**: This test produces NFTs that show placeholder images because it doesn't follow proper NFT metadata standards.

## 🚀 How to Run Tests

### Prerequisites
1. **Environment Setup**:
   ```bash
   # Copy environment template
   cp env.template .env
   
   # Edit with your credentials
   nano .env
   ```

2. **Required Environment Variables**:
   ```bash
   MNEMONICS="your twelve or twenty four word mnemonic phrase here"
   PINATA_API_KEY="your_pinata_api_key"
   PINATA_API_SECRET="your_pinata_secret_key"
   AVALANCHE_NFT_CONTRACT_ADDRESS="0x6C995090C530756d59E6eEa5a3bA209863e0E167"
   ```

3. **Dependencies**:
   ```bash
   npm install
   ```

### Running Tests

#### 1. **Main NFT Minting Test** (Recommended)
```bash
cd blockchain_tests
node test-nft-minting-proper.js
```

**Expected Output**:
- Wallet and balance verification
- Contract connection confirmation
- Metadata creation and IPFS upload
- Gas estimation and transaction details
- NFT minting success confirmation
- Explorer links for verification

#### 2. **Metadata Structure Test**
```bash
cd blockchain_tests
node simple-metadata-test.js
```

**Expected Output**:
- Metadata JSON structure explanation
- IPFS upload demonstration
- URL structure validation
- Educational explanations about NFT standards

#### 3. **Legacy Test** (Reference Only)
```bash
cd blockchain_tests
node test-nft-minting.js
```

**Note**: This will create NFTs with placeholder images.

## 📊 Test Results Interpretation

### Successful Test Indicators
- ✅ **Wallet Balance**: Sufficient AVAX for gas fees
- ✅ **Contract Connection**: Valid contract address response
- ✅ **IPFS Upload**: Successful metadata upload with hash
- ✅ **Transaction Hash**: Valid Avalanche transaction hash
- ✅ **Block Confirmation**: Block number and gas usage
- ✅ **Token ID**: New token ID assigned
- ✅ **Explorer Link**: Working Snowtrace URL

### Common Issues and Solutions

#### 1. **Insufficient Balance**
```
Error: insufficient funds for gas
```
**Solution**: Add AVAX to your master wallet

#### 2. **Invalid Mnemonic**
```
Error: MNEMONICS not found in .env file
```
**Solution**: Check your `.env` file has correct mnemonic

#### 3. **Pinata API Issues**
```
Error: Pinata upload failed: 401
```
**Solution**: Verify your Pinata API keys

#### 4. **Contract Not Found**
```
Error: contract call failed
```
**Solution**: Verify the contract address is correct

## 🔍 Security Analysis

### ✅ **No Exposed Secrets**
All test files properly use environment variables:
- ❌ No hardcoded API keys
- ❌ No hardcoded mnemonics
- ❌ No hardcoded private keys
- ✅ All secrets loaded from `.env`
- ✅ `.env` file is gitignored

### 🛡️ **Best Practices Followed**
- Environment variable usage
- Error handling and validation
- Gas estimation before transactions
- Transaction confirmation waiting
- Comprehensive logging for debugging

## 📈 Test Coverage

### Blockchain Operations
- ✅ Wallet derivation from mnemonic
- ✅ Balance checking
- ✅ Contract interaction
- ✅ Gas estimation
- ✅ Transaction signing and broadcasting
- ✅ Transaction confirmation

### IPFS Operations
- ✅ Metadata JSON creation
- ✅ File upload to Pinata
- ✅ IPFS URL generation
- ✅ Gateway accessibility testing

### NFT Standards
- ✅ ERC-721 compliance
- ✅ Proper metadata structure
- ✅ TokenURI implementation
- ✅ Image URL referencing
- ✅ Attribute formatting

## 🎯 Integration with ZelfKey System

These tests demonstrate the complete flow:

```
ZelfKey QR Generation → IPFS Storage → NFT Metadata → Blockchain Minting
        ↓                   ↓             ↓              ↓
   Biometric Data      Pinata Upload   JSON Structure   Avalanche NFT
```

### Real-World Usage
1. **Generate ZelfKey**: Create encrypted QR with biometric verification
2. **Upload to IPFS**: Store QR image on IPFS via Pinata
3. **Create Metadata**: Build NFT metadata JSON with image reference
4. **Upload Metadata**: Store metadata JSON on IPFS
5. **Mint NFT**: Create NFT with tokenURI pointing to metadata
6. **Transfer**: Send NFT to user's wallet

## 🔗 Related Documentation

- **[Main README](../README.md)**: Project overview and setup
- **[Avalanche Module](../Avalanche/README.md)**: Module-specific documentation
- **[Deployment Guide](../Avalanche/DEPLOYMENT.md)**: Contract deployment instructions
- **[Helper Functions](../HELPER_FUNCTIONS_README.md)**: ZelfKey system documentation

## 🎉 Success Metrics

Your blockchain integration is successful when:
- ✅ All tests pass without errors
- ✅ NFTs mint successfully on mainnet
- ✅ Images render properly on explorers
- ✅ Gas fees are reasonable and covered
- ✅ Recipients receive NFTs correctly
- ✅ Metadata follows NFT standards

## 🚀 Next Steps

1. **Integration**: Incorporate these tests into your main ZelfKey workflow
2. **Automation**: Set up CI/CD pipeline for automated testing
3. **Monitoring**: Implement transaction monitoring and error reporting
4. **Scaling**: Optimize for batch minting and high-volume usage

---

**✨ Congratulations!** Your blockchain tests demonstrate a fully functional NFT minting system integrated with the ZelfKey biometric security platform on Avalanche mainnet! 🎊
