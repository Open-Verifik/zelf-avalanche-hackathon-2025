# 🚀 ZelfKeyNFT Smart Contract Deployment Guide

This guide will walk you through deploying your custom ZelfKeyNFT contract to Avalanche mainnet.

## 🎉 **DEPLOYMENT SUCCESSFUL!**

Your ZelfKeyNFT contract has been **successfully deployed to Avalanche mainnet** and is ready for use!

### ✅ **Deployment Details**

- **Contract Address**: `0x6C995090C530756d59E6eEa5a3bA209863e0E167`
- **Network**: Avalanche Mainnet (C-Chain)
- **Transaction Hash**: `0xf35c7fbdd4583843f0cd7d07c82e2d9e439dc4dd30538b3453e97c717cb47e4b`
- **Explorer**: [View on Snowtrace](https://snowtrace.io/address/0x6C995090C530756d59E6eEa5a3bA209863e0E167)
- **Status**: Ready for NFT minting! 🚀

### 🎯 **Next Steps**

1. **Update your `.env`** with the contract address
2. **Test NFT minting** using the deployed contract
3. **Start creating NFTs** from your ZelfKey data
4. **View your NFTs** on Snowtrace explorer

**No further deployment needed - you're all set!** ✨

## 🎯 **Using Your Deployed Contract**

Since your contract is already deployed, you can start using it immediately:

### 1. **Update Environment Variables**

```bash
# Add to your .env file
AVALANCHE_NFT_CONTRACT_ADDRESS=0x6C995090C530756d59E6eEa5a3bA209863e0E167
```

### 2. **Test NFT Minting**

```bash
# Test the complete system
node test-avalanche-nft.js
```

### 3. **Start Creating NFTs**

Your contract is ready to mint NFTs from ZelfKey data. The master wallet will cover all gas fees automatically.

### 4. **View on Explorer**

- **Contract**: [Snowtrace](https://snowtrace.io/address/0x6C995090C530756d59E6eEa5a3bA209863e0E167)
- **Network**: Avalanche Mainnet
- **Status**: Active and ready

## 📋 Prerequisites

> **Note**: Your contract is already deployed! This section is for reference if you want to deploy additional contracts.

1. **Node.js 18+** installed
2. **Master wallet** with AVAX for gas fees
3. **Environment variables** configured
4. **IPFS metadata** prepared for contract

## 🔧 Setup

### 1. Install Dependencies

```bash
# From the main project root
npm install
```

### 2. Environment Configuration

Copy the template and configure your environment:

```bash
cp ../env.template .env
```

Edit `.env` with your credentials:

```bash
# Master Wallet Configuration (REQUIRED)
MNEMONICS="your twelve or twenty four word mnemonic phrase here"

# Optional: Private key alternative
# PRIVATE_KEY="private_key_here"

# Network Configuration (defaults to mainnet)
NETWORK=mainnet

# Gas Price Configuration (optional, defaults to 25 gwei)
GAS_PRICE=25000000000

# Optional: Snowtrace API key for automatic contract verification (not required)
# SNOWTRACE_API_KEY="your_snowtrace_api_key_here"
```

### 3. Prepare Contract Metadata

Create your contract metadata JSON and upload to IPFS:

```json
{
  "name": "ZelfKey Secure Storage NFTs",
  "description": "Unique NFTs representing encrypted data stored with ZelfKey's biometric security system",
  "image": "https://ipfs.io/ipfs/YOUR_CONTRACT_IMAGE_HASH",
  "external_url": "https://zelf.world",
  "seller_fee_basis_points": 250,
  "fee_recipient": "0xYOUR_FEE_RECIPIENT_ADDRESS"
}
```

Upload this to IPFS and update the `contractURI` in `deploy/deploy-contract.js`.

## 🏗️ Contract Compilation

### 1. Compile the Contract

```bash
# From the main project root
npm run compile
```

This will:
- Compile the Solidity contract
- Generate artifacts in `./artifacts/`
- Create the contract bytecode

### 2. Update Deployment Script

After compilation, copy the contract bytecode from `./artifacts/contracts/ZelfKeyNFT.sol/ZelfKeyNFT.json` and update the `CONTRACT_BYTECODE` variable in `deploy/deploy-contract.js`.

## 🚀 Deployment

### 1. Deploy to Mainnet

```bash
# From the main project root
npm run deploy:mainnet
```

### 2. Deploy to Testnet (Optional)

```bash
# From the main project root
npm run deploy:testnet
```

### 3. Deploy Locally (Development)

```bash
# From the main project root
npm run deploy:local
```

## 📊 Deployment Process

The deployment script will:

1. **Connect** to Avalanche network
2. **Verify** master wallet credentials
3. **Check** wallet balance
4. **Estimate** deployment gas costs
5. **Deploy** the contract
6. **Verify** deployment success
7. **Test** contract functions
8. **Save** deployment information

## 🔍 Contract Verification

### 1. Automatic Verification (No API Key Required)

The deployment script automatically verifies:
- Contract deployment success
- Constructor parameters
- Basic function calls
- Ownership assignment

### 2. Manual Verification on Snowtrace (Recommended)

**No API key required** - you can verify manually for free:

1. Go to [Snowtrace](https://snowtrace.io)
2. Search for your contract address
3. Click "Contract" tab
4. Click "Verify and Publish"
5. Upload your contract source code
6. Verify the contract

**Note**: Manual verification is free and doesn't require any API keys.

## 📝 Post-Deployment

### 1. Update Environment

Add your contract address to `.env`:

```bash
# Contract Configuration
ZELFKEY_NFT_CONTRACT_ADDRESS="0xYOUR_DEPLOYED_CONTRACT_ADDRESS"
```

### 2. Test Contract Functions

```bash
# Test basic functions
npm run console
```

In the Hardhat console:

```javascript
const contract = await ethers.getContractAt("ZelfKeyNFT", "0xYOUR_CONTRACT_ADDRESS");
await contract.name();
await contract.symbol();
await contract.totalSupply();
```

### 3. Update Module Configuration

Update your NFT module to use the deployed contract:

```javascript
// In avalanche-nft.module.js
const DEFAULT_CONTRACT_ADDRESS = process.env.ZELFKEY_NFT_CONTRACT_ADDRESS;
```

## 🧪 Testing

### 1. Run Tests

```bash
npm test
```

### 2. Test Minting

```javascript
// Test single NFT minting
const tx = await contract.mintNFT(
  "0xRECIPIENT_ADDRESS",
  "https://ipfs.io/ipfs/YOUR_METADATA_HASH"
);

// Test batch minting
const tx = await contract.batchMintNFTs(
  "0xRECIPIENT_ADDRESS",
  ["https://ipfs.io/ipfs/HASH1", "https://ipfs.io/ipfs/HASH2"]
);
```

## 🔒 Security Considerations

### 1. Access Control

- Only the master wallet can mint NFTs
- Minting can be disabled in emergencies
- Maximum supply is enforced

### 2. Gas Optimization

- Contract uses efficient OpenZeppelin patterns
- Optimized Solidity compiler settings
- Gas estimation before deployment

### 3. Emergency Functions

- `emergencyDisableMinting()` - Permanently disable minting
- `toggleMinting()` - Toggle minting on/off
- `withdraw()` - Recover any sent ETH

## 📈 Monitoring

### 1. Contract Events

Monitor these events:
- `NFTMinted` - Single NFT minted
- `BatchNFTsMinted` - Multiple NFTs minted
- `MintingToggled` - Minting status changed
- `MaxSupplyUpdated` - Supply limit changed

### 2. Gas Usage

Track gas costs:
- Deployment: ~2-5 AVAX
- Single mint: ~0.01-0.05 AVAX
- Batch mint: ~0.01-0.05 AVAX per NFT

## 🚨 Troubleshooting

### Common Issues

1. **Insufficient Balance**
   - Ensure master wallet has >0.1 AVAX
   - Check gas price settings

2. **Compilation Errors**
   - Verify Solidity version compatibility
   - Check OpenZeppelin contract imports

3. **Deployment Failures**
   - Verify RPC URL accessibility
   - Check network configuration
   - Ensure proper gas limits

4. **Verification Issues**
   - Verify contract source code
   - Check constructor parameters
   - Ensure proper compiler settings

### Support

For deployment issues:
1. Check Hardhat logs
2. Verify environment variables
3. Test on testnet first
4. Check Avalanche network status

## 🎯 Next Steps

After successful deployment:

1. **Integrate** with your NFT module
2. **Test** minting functionality
3. **Deploy** to production
4. **Monitor** contract performance
5. **Scale** as needed

## 📚 Resources

- [Avalanche Documentation](https://docs.avax.network/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)
- [Snowtrace Explorer](https://snowtrace.io)
- [IPFS Documentation](https://docs.ipfs.io/)

---

**Happy Deploying! 🚀**

Your ZelfKeyNFT contract will enable secure, scalable NFT creation for your biometric encryption platform.
