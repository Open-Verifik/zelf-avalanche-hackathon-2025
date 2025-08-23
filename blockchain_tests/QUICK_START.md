# Quick Start Guide 🚀

## ⚡ Run Tests in 3 Steps

### 1. **Setup Environment** (One-time)
```bash
# Copy environment template
cp env.template .env

# Edit with your credentials
nano .env
```

### 2. **Add Your Credentials**
```bash
# Required in .env file:
MNEMONICS="your twelve or twenty four word mnemonic phrase here"
PINATA_API_KEY="your_pinata_api_key"
PINATA_API_SECRET="your_pinata_secret_key"
AVALANCHE_NFT_CONTRACT_ADDRESS="0x6C995090C530756d59E6eEa5a3bA209863e0E167"
```

### 3. **Run Tests**
```bash
# Navigate to test directory
cd blockchain_tests

# Run main NFT minting test (RECOMMENDED)
node test-nft-minting-proper.js

# Or run metadata validation test
node simple-metadata-test.js
```

## ✅ Expected Success Output
```
🎉 NFT Minted Successfully!
   Token ID: 7
   Owner: 0x2DDcA84eF860085053A0008471BF27D73658f261
   Cost: 0.0044566 AVAX
   Explorer: https://snowtrace.io/tx/[hash]
```

## 🔧 Test Configuration

### Default Settings
- **Network**: Avalanche Mainnet
- **Recipient**: `0x2DDcA84eF860085053A0008471BF27D73658f261`
- **Gas Price**: 25 gwei
- **Image**: QR code from IPFS

### Customization
Edit test files to change:
- `recipientAddress`: Where NFT goes
- `imageUrl`: Different QR code
- `gasPrice`: Network fee preference

## 🎯 Test Files

| File | Purpose | Runtime |
|------|---------|---------|
| `test-nft-minting-proper.js` | **Main test** - Full NFT minting | ~30 seconds |
| `simple-metadata-test.js` | Metadata validation only | ~10 seconds |
| `test-nft-minting.js` | Legacy test (reference) | ~30 seconds |

## 🚨 Troubleshooting

### Common Issues
```bash
# Issue: Insufficient funds
# Solution: Add AVAX to wallet

# Issue: Missing .env
# Solution: Copy env.template to .env

# Issue: Invalid API keys
# Solution: Check Pinata credentials

# Issue: Network error
# Solution: Check internet connection
```

## 🎊 Success Indicators
- ✅ Transaction hash received
- ✅ Block number confirmed
- ✅ Token ID assigned
- ✅ NFT visible on Snowtrace
- ✅ Image renders correctly

---

**Ready to mint your first NFT?** Run the test and watch your QR code become a blockchain asset! 🎨✨
