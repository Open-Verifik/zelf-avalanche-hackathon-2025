# Avalanche NFT Module for ZelfKey

This module integrates ZelfKey's secure data storage with Avalanche blockchain to create NFTs from IPFS-stored QR codes and encrypted data. **Gas fees are covered by the master wallet, making it easy for users to mint NFTs without needing their own AVAX.**

## Features

- **NFT Minting**: Create NFTs from ZelfKey stored data
- **Batch Minting**: Mint multiple NFTs at once
- **Metadata Generation**: Automatic NFT metadata creation with ZelfKey-specific attributes
- **Multi-Network Support**: Works with Avalanche mainnet, testnet, and Fuji testnet
- **Contract Management**: Deploy new NFT contracts and manage existing ones
- **Collection Viewing**: View user's NFT collection and individual NFT details
- **Master Wallet System**: Service covers all gas fees for a seamless user experience
- **Mainnet Ready**: Defaults to Avalanche mainnet for production use

## 🚀 Quick Start

Your NFT contract is **already deployed and ready to use!**

```bash
# 1. Set up environment
cp env.template .env

# 2. Add your mnemonic and contract address
echo 'MNEMONICS="your mnemonic phrase here"' >> .env
echo 'AVALANCHE_NFT_CONTRACT_ADDRESS=0x6C995090C530756d59E6eEa5a3bA209863e0E167' >> .env

# 3. Test the system
node test-avalanche-nft.js
```

**Ready to mint your first NFT!** 🎨

## 🚀 Deployment Status

### ✅ **Successfully Deployed on Mainnet!**

- **Contract Address**: `0x6C995090C530756d59E6eEa5a3bA209863e0E167`
- **Network**: Avalanche Mainnet (C-Chain)
- **Transaction Hash**: `0xf35c7fbdd4583843f0cd7d07c82e2d9e439dc4dd30538b3453e97c717cb47e4b`
- **Explorer**: [View on Snowtrace](https://snowtrace.io/address/0x6C995090C530756d59E6eEa5a3bA209863e0E167)
- **Status**: Ready for NFT minting! 🎉

### 📊 Contract Details

- **Name**: ZelfKey NFTs
- **Symbol**: ZELFKEY  
- **Total Supply**: 0 (ready for your first NFT!)
- **Owner**: Your master wallet
- **Gas Fees**: Covered by service

## Architecture

```
ZelfKey Storage → IPFS → Avalanche NFT Module → Master Wallet → Avalanche Blockchain
     ↓              ↓              ↓                    ↓                    ↓
  Encrypted    QR Code      NFT Metadata        Gas Fee Payment      ERC-721 Token
    Data      Stored on    with ZelfKey        (Covered by         on Avalanche
              IPFS         Attributes          Service)             C-Chain
```

## Prerequisites

- Node.js with ethers.js (already included in project)
- **Master wallet with AVAX for gas fees** (configured in `.env`)
- ZelfKey data with IPFS storage
- **NFT contract address: `0x6C995090C530756d59E6eEa5a3bA209863e0E167` (already deployed!)**

## Installation

1. **Copy the environment template:**
   ```bash
   cp env.template .env
   ```

2. **Configure your master wallet in `.env`:**
   ```bash
   # Required: Master wallet credentials
   MNEMONICS="your twelve or twenty four word mnemonic phrase here"
   
   # Required: Contract address (already deployed!)
   AVALANCHE_NFT_CONTRACT_ADDRESS=0x6C995090C530756d59E6eEa5a3bA209863e0E167
   
   # Optional: Network and gas configuration (defaults to mainnet)
   NETWORK=mainnet
   GAS_PRICE=25000000000
   ```

3. **Ensure your master wallet has AVAX:**
   - For mainnet: Real AVAX for gas fees (✅ **Your wallet has 0.149 AVAX**)
   - For testnet: Test AVAX from [Avalanche Faucet](https://faucet.avax.network/)

## Usage Examples

### 1. Mint NFT from ZelfKey Data (Gas Fees Covered!)

```javascript
const AvalancheNFTModule = require('./Avalanche/modules/avalanche-nft.module');

// Example: Mint NFT from stored website password
const mintResult = await AvalancheNFTModule.mintNFTFromZelfKey({
    zelfKeyData: {
        publicData: {
            type: "website_password",
            website: "github.com",
            username: "***com",
            timestamp: "2025-01-15T10:30:00.000Z"
        },
        ipfs: {
            hash: "QmX...",
            gatewayUrl: "https://ipfs.io/ipfs/QmX...",
            pinSize: 12345
        },
        message: "Website password stored successfully"
    },
    recipientAddress: "0x1234...", // User's address to receive NFT
    contractAddress: "0x5678...",  // NFT contract address
    network: "mainnet"              // Use Avalanche mainnet (default)
});

console.log("NFT Minted:", mintResult);
console.log("Recipient:", mintResult.recipientAddress);
console.log("Master Wallet:", mintResult.masterWalletAddress);
console.log("Network:", mintResult.network);
console.log("Gas Fees: Covered by service!");
```

### 2. Batch Mint Multiple NFTs

```javascript
// Example: Mint multiple notes as NFTs
const batchResult = await AvalancheNFTModule.batchMintNFTsFromZelfKey({
    zelfKeyDataArray: [
        // Note 1
        {
            publicData: { type: "notes", title: "API Keys", pairCount: 3 },
            ipfs: { hash: "QmY...", gatewayUrl: "https://ipfs.io/ipfs/QmY..." }
        },
        // Note 2
        {
            publicData: { type: "notes", title: "Passwords", pairCount: 5 },
            ipfs: { hash: "QmZ...", gatewayUrl: "https://ipfs.io/ipfs/QmZ..." }
        }
    ],
    recipientAddress: "0x1234...", // User receives all NFTs
    contractAddress: "0x5678...",
    network: "mainnet"              // Defaults to mainnet
});

console.log("Batch Minting Result:", batchResult);
```

### 3. Preview NFT Metadata

```javascript
// Preview metadata before minting
const metadata = AvalancheNFTModule.createNFTMetadata(
    zelfKeyData,
    ipfsHash,
    ipfsGatewayUrl
);

console.log("NFT Metadata:", JSON.stringify(metadata, null, 2));
```

### 4. Get NFT Information

```javascript
const nftInfo = await AvalancheNFTModule.getNFTInfo({
    contractAddress: "0x...",
    tokenId: "1",
    network: "mainnet"              // Defaults to mainnet
});

console.log("NFT Info:", nftInfo);
```

### 5. View User's NFT Collection

```javascript
const userNFTs = await AvalancheNFTModule.getUserNFTs({
    userAddress: "0x...",
    contractAddress: "0x...",
    network: "mainnet"              // Defaults to mainnet
});

console.log("User's NFTs:", userNFTs);
```

### 6. Check Master Wallet Status

```javascript
const masterWalletInfo = await AvalancheNFTModule.getMasterWalletInfo("mainnet");

console.log("Master Wallet Address:", masterWalletInfo.address);
console.log("Balance:", masterWalletInfo.balance.avax, "AVAX");
console.log("Network:", masterWalletInfo.network);
```

## API Endpoints

### POST `/api/avalanche-nft/mint`
Mint a single NFT from ZelfKey data. **Gas fees covered by master wallet.**

**Request Body:**
```json
{
    "zelfKeyData": {
        "publicData": { "type": "website_password", "website": "github.com" },
        "ipfs": { "hash": "QmX...", "gatewayUrl": "https://ipfs.io/ipfs/QmX..." }
    },
    "recipientAddress": "0x1234...",
    "contractAddress": "0x5678...",
    "network": "mainnet"
}
```

### POST `/api/avalanche-nft/batch-mint`
Mint multiple NFTs from ZelfKey data array. **Gas fees covered by master wallet.**

### POST `/api/avalanche-nft/info`
Get information about a specific NFT.

### POST `/api/avalanche-nft/user-nfts`
Get all NFTs owned by a user address.

### POST `/api/avalanche-nft/deploy`
Deploy a new NFT contract using master wallet.

### POST `/api/avalanche-nft/preview-metadata`
Preview NFT metadata without minting.

### POST `/api/avalanche-nft/master-wallet`
Get master wallet information and balance.

### GET `/api/avalanche-nft/networks`
Get available Avalanche networks.

### GET `/api/avalanche-nft/contract-abi`
Get the ERC-721 contract ABI.

## NFT Metadata Structure

The module automatically generates rich NFT metadata including:

- **Name**: Descriptive name based on data type
- **Description**: Secure storage description
- **Image**: IPFS gateway URL to the QR code
- **Attributes**: 
  - Data Type (website_password, notes, credit_card, etc.)
  - Storage Method (ZelfKey Biometric Encryption)
  - IPFS Hash
  - Timestamp
  - Type-specific attributes (website, username, title, etc.)
- **Properties**: 
  - File information
  - ZelfKey-specific metadata
  - IPFS details

## Master Wallet System

### How It Works
1. **Service Configuration**: Master wallet credentials are stored in `.env`
2. **Gas Fee Coverage**: All transactions are signed by the master wallet
3. **User Experience**: Users only need to provide their recipient address
4. **Security**: No private keys or mnemonics exposed to end users

### Benefits
- **Simplified API**: Users don't need blockchain knowledge
- **Cost Management**: Centralized gas fee control
- **Better Security**: No private key exposure
- **User Adoption**: Lower barrier to entry for NFT creation
- **Production Ready**: Defaults to mainnet for real-world use

### Configuration
```bash
# Required in .env file
MNEMONICS="your twelve or twenty four word mnemonic phrase here"

# Optional fallback
PRIVATE_KEY="0x1234..." # Alternative to mnemonic

# Network defaults to mainnet
NETWORK=mainnet
```

## Networks

- **Mainnet**: `mainnet` (default, production use)
- **Testnet**: `testnet` (development and testing)
- **Fuji**: `fuji` (alternative testnet)

## Gas Configuration

Default gas price is set to 25 gwei for all networks. You can modify this in the `AVALANCHE_CONFIG` object or set `GAS_PRICE` in your `.env` file.

## Security Considerations

1. **Master Wallet Security**: Keep your mnemonic phrase secure and private
2. **Environment Variables**: Never commit `.env` file to version control
3. **Network Selection**: Defaults to mainnet for production use
4. **Contract Verification**: Verify deployed contracts on Snowtrace
5. **Access Control**: Implement proper access control for minting functions
6. **Real AVAX**: Mainnet operations use real AVAX for gas fees

## Error Handling

The module includes comprehensive error handling:

- Parameter validation
- Network connectivity checks
- Contract interaction error handling
- Gas estimation fallbacks
- Transaction confirmation monitoring
- Master wallet credential validation

## Testing

Test the module on your preferred network:

### Mainnet Testing (Default)
1. **Setup Environment**: Copy `env.template` to `.env` and add your mnemonic
2. **Ensure AVAX**: Your master wallet needs real AVAX for gas fees
3. **Deploy Contract**: Use the module to deploy an NFT contract
4. **Store Data**: Use ZelfKey to store data with IPFS
5. **Mint NFT**: Test minting with real blockchain interaction
6. **Verify**: Check NFTs on [Snowtrace Mainnet](https://snowtrace.io/)

### Testnet Testing
1. **Change Network**: Set `NETWORK=testnet` or `NETWORK=fuji` in `.env`
2. **Get Test AVAX**: Visit [Avalanche Faucet](https://faucet.avax.network/)
3. **Test Operations**: Same workflow but with test tokens

## Integration with ZelfKey

The module seamlessly integrates with your existing ZelfKey system:

1. **Store Data**: Use ZelfKey to store sensitive data
2. **IPFS Storage**: Data is automatically stored on IPFS
3. **NFT Creation**: Use this module to create NFTs from the stored data
4. **Blockchain Storage**: NFTs are permanently stored on Avalanche
5. **Gas Coverage**: All fees covered by your master wallet

## Example Workflow

```javascript
// 1. Store data with ZelfKey
const zelfKeyResult = await ZelfKeyModule.storePassword({
    website: "github.com",
    username: "user@email.com",
    password: "securepass123",
    faceBase64: "...",
    masterPassword: "..."
});

// 2. Mint NFT using master wallet (gas fees covered!)
const nftResult = await AvalancheNFTModule.mintNFTFromZelfKey({
    zelfKeyData: zelfKeyResult,
    recipientAddress: "0x1234...", // User's address
    contractAddress: "0x6C995090C530756d59E6eEa5a3bA209863e0E167",  // Your deployed NFT contract
    network: "mainnet"              // Defaults to mainnet
});

// 3. NFT is now on Avalanche mainnet!
console.log("NFT Token ID:", nftResult.tokenId);
console.log("Transaction Hash:", nftResult.transactionHash);
console.log("Recipient Address:", nftResult.recipientAddress);
console.log("Master Wallet Address:", nftResult.masterWalletAddress);
console.log("Network:", nftResult.network);
console.log("Explorer URL:", nftResult.explorerUrl);
console.log("Gas Fees: Covered by service! 🎉");
```

## Support

For questions or issues, please refer to:
- Avalanche Documentation: https://docs.avax.network/
- ZelfKey Documentation: [Your ZelfKey docs]
- This module's source code and examples
- Environment configuration in `env.template`

## License

ISC License - see project LICENSE file for details.
