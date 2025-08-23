# 🏔️ Avalanche NFT Integration

This project integrates Avalanche blockchain NFT functionality with the ZelfKey system.

## 📁 **Project Structure**

```
zelf-avalanche-hackathon-2025/
├── hardhat.config.js              # Main Hardhat configuration
├── package.json                   # Main dependencies (includes Hardhat)
├── .env                          # Environment variables
├── Avalanche/
│   ├── contracts/
│   │   └── ZelfKeyNFT.sol       # Custom NFT smart contract
│   ├── deploy/
│   │   └── deploy-contract.js   # Contract deployment script
│   ├── modules/
│   │   └── avalanche-nft.module.js # Core NFT functionality
│   ├── controllers/
│   │   └── avalanche-nft.controller.js # API controllers
│   ├── routes/
│   │   └── avalanche-nft.route.js # API endpoints
│   └── README.md                 # Detailed documentation
└── server.js                     # Main server
```

## 🚀 **Quick Start**

### 1. **Install Dependencies**
```bash
npm install
```

### 2. **Setup Environment**
```bash
cp env.template .env
# Edit .env with your mnemonic phrase
```

### 3. **Compile Contract**
```bash
npm run compile
```

### 4. **Deploy to Mainnet**
```bash
npm run deploy:mainnet
```

## 📚 **Documentation**

- [Deployment Guide](./Avalanche/DEPLOYMENT.md) - Complete deployment instructions
- [Implementation Summary](./Avalanche/IMPLEMENTATION_SUMMARY.md) - Technical overview
- [API Documentation](./Avalanche/README.md) - API endpoints and usage

## 🎯 **Key Benefits of Unified Structure**

✅ **Single package.json** - No dependency conflicts  
✅ **Centralized build** - All commands from root directory  
✅ **Simplified imports** - Clean module paths  
✅ **Easier testing** - Unified test environment  
✅ **Better maintenance** - One place to manage everything  

## 🔧 **Available Commands**

```bash
# Contract Management
npm run compile              # Compile Solidity contracts
npm run deploy:mainnet      # Deploy to Avalanche mainnet
npm run deploy:testnet      # Deploy to Avalanche testnet
npm run deploy:local        # Deploy locally for testing

# Development
npm run clean               # Clean Hardhat cache
npm run node                # Start local Hardhat node
npm run console             # Open Hardhat console

# Testing
npm test                    # Run all tests
npm run test:watch         # Run tests in watch mode
```

## 🌐 **Networks**

- **Mainnet**: Avalanche C-Chain (Chain ID: 43114)
- **Testnet**: Fuji Testnet (Chain ID: 43113)
- **Local**: Hardhat development network (Chain ID: 1337)

## 💡 **Why This Structure?**

Instead of having separate `package.json` and `hardhat.config.js` files in the `Avalanche` subfolder, everything is now unified in the main project:

1. **No duplicate dependencies** - Everything in one place
2. **Simplified workflow** - All commands from root directory
3. **Better integration** - Easy to import and use across modules
4. **Cleaner architecture** - Follows standard Node.js project structure

This approach is much more maintainable and follows industry best practices!
