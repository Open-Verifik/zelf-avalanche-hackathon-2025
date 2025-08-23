# Zelf Avalanche Hackathon 2025 🚀

> **Building Security Inside Avalanche** - NFT Integration with ZelfKey System

## 🎯 Project Overview

This project successfully integrates the **ZelfKey security system** with **Avalanche blockchain** to create and manage NFTs from encrypted QR codes. The system allows users to store sensitive data (passwords, notes, credit cards, etc.) as encrypted QR codes on IPFS, then mint them as NFTs on Avalanche.

## ✨ Key Features

- **🔐 ZelfKey Integration**: Secure data storage with biometric face verification
- **🌐 IPFS Storage**: Decentralized storage of encrypted QR codes
- **🎨 NFT Creation**: Mint unique NFTs from ZelfKey data on Avalanche
- **💳 Master Wallet System**: Service pays gas fees, users only provide recipient address
- **🔒 Zero-Knowledge**: Users never expose private keys or mnemonics
- **⚡ Mainnet Ready**: Deployed and tested on Avalanche mainnet

## 🏗️ Architecture

```
ZelfKey System → IPFS Storage → NFT Metadata → Avalanche Blockchain
     ↓              ↓            ↓           ↓
  Encrypted    Pinata Pinning  JSON        Smart Contract
  QR Codes     IPFS Gateway    Metadata    Minting
```

## 🚀 Current Status

### ✅ **Successfully Deployed!**

- **Contract Address**: `0x6C995090C530756d59E6eEa5a3bA209863e0E167`
- **Network**: Avalanche Mainnet (C-Chain)
- **Transaction**: `0xf35c7fbdd4583843f0cd7d07c82e2d9e439dc4dd30538b3453e97c717cb47e4b`
- **Explorer**: [View on Snowtrace](https://snowtrace.io/address/0x6C995090C530756d59E6eEa5a3bA209863e0E167)

### 📊 Contract Details

- **Name**: ZelfKey NFTs
- **Symbol**: ZELFKEY
- **Total Supply**: 0 (ready for minting)
- **Owner**: Master wallet (service-controlled)

## 🛠️ Technology Stack

- **Blockchain**: Avalanche C-Chain (EVM compatible)
- **Smart Contracts**: Solidity + OpenZeppelin v5
- **Development**: Hardhat v3 + Ethers.js v6
- **Backend**: Node.js + Koa.js
- **Storage**: IPFS (Pinata)
- **Security**: ZelfKey biometric verification

## 📁 Project Structure

```
zelf-avalanche-hackathon-2025/
├── Avalanche/                    # NFT module and contracts
│   ├── contracts/               # Solidity smart contracts
│   ├── deploy/                  # Deployment scripts
│   ├── modules/                 # NFT business logic
│   ├── controllers/             # HTTP request handlers
│   ├── routes/                  # API endpoints
│   └── README.md               # Avalanche-specific docs
├── hardhat.config.js            # Hardhat configuration
├── package.json                 # Dependencies and scripts
├── .env                        # Environment variables (gitignored)
├── env.template                # Environment template
└── README.md                   # This file
```

## 🚀 Quick Start

### 1. **Environment Setup**

```bash
# Copy environment template
cp env.template .env

# Edit .env with your credentials
nano .env
```

**Required Environment Variables:**
```bash
# Wallet credentials (choose one)
MNEMONICS="your twelve or twenty four word mnemonic phrase here"
# OR
PRIVATE_KEY="0x1234..." # Alternative to mnemonic

# IPFS Configuration
PINATA_API_KEY="your_pinata_api_key"
PINATA_API_SECRET="your_pinata_secret_key"

# Contract address (already deployed)
AVALANCHE_NFT_CONTRACT_ADDRESS=0x6C995090C530756d59E6eEa5a3bA209863e0E167
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Test the System**

```bash
# Test NFT module functionality
node Avalanche/test-avalanche-nft.js
```

## 📚 Documentation

- **[Avalanche Module README](Avalanche/README.md)** - Complete NFT module documentation
- **[Deployment Guide](Avalanche/DEPLOYMENT.md)** - Smart contract deployment instructions
- **[Helper Functions](HELPER_FUNCTIONS_README.md)** - ZelfKey system documentation

## 🔐 Security Features

- **Master Wallet System**: Service pays all gas fees
- **Environment Variables**: All secrets stored securely
- **Biometric Verification**: Face-based authentication
- **Encrypted Storage**: Data encrypted before IPFS storage
- **Zero User Credentials**: Users never provide private keys

## 🌟 Use Cases

1. **Password Management**: Store website passwords as NFTs
2. **Secure Notes**: Encrypt and store sensitive information
3. **Credit Card Storage**: Secure payment information
4. **Contact Management**: Private contact details
5. **Bank Details**: Secure financial information

## 🧪 Testing

The system has been thoroughly tested:
- ✅ Contract deployment on mainnet
- ✅ NFT metadata creation
- ✅ IPFS integration
- ✅ ZelfKey data flow
- ✅ Gas estimation and deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For questions or issues:
- Check the [Avalanche README](Avalanche/README.md) for detailed usage
- Review the [deployment guide](Avalanche/DEPLOYMENT.md) for setup
- Examine the [helper functions](HELPER_FUNCTIONS_README.md) for system details

---

**🎉 Congratulations!** Your ZelfKey NFT system is live on Avalanche mainnet and ready to create secure, encrypted NFTs from your biometric-verified data!
