# 🔐 ZelfKey Extension - Avalanche Hackathon 2025

## 🎯 Overview

ZelfKey is a revolutionary password management system built on the Avalanche blockchain that combines biometric security, NFT ownership, and decentralized storage. This extension represents the MVP (Minimum Viable Product) focused on password management, with a comprehensive roadmap for expansion into other digital asset categories.

## 🚀 How It Works

### Core Architecture

ZelfKey operates on a three-layer security model:

1. **🔐 Biometric Verification** - Face recognition for user authentication
2. **🖼️ NFT Ownership** - Blockchain-based proof of ownership
3. **🌐 IPFS Storage** - Decentralized, encrypted data storage

### Password Storage Flow

```
User Input → Biometric Verification → Data Encryption → IPFS Upload → NFT Minting → Success Confirmation
```

#### Step-by-Step Process:

1. **User Input**: User enters website, username, password, and optional notes
2. **Biometric Capture**: Extension captures user's face for identity verification
3. **Data Processing**: 
   - Sensitive data is encrypted using the user's biometric signature
   - Public metadata is prepared for IPFS storage
   - ZelfProof is generated from the biometric data
4. **IPFS Storage**: Encrypted data and metadata are uploaded to IPFS via Pinata
5. **NFT Creation**: A unique NFT is minted on Avalanche containing:
   - ZelfProof hash
   - IPFS metadata
   - Ownership information
   - Transaction details
6. **Confirmation**: User receives comprehensive success details including NFT info, IPFS links, and transaction hashes

### Password Retrieval Flow

```
Password Selection → Biometric Verification → Data Decryption → Display Decrypted Information
```

#### Step-by-Step Process:

1. **Password Selection**: User selects a stored password from their list
2. **Biometric Verification**: User verifies identity through face recognition
3. **API Call**: Extension calls the ZelfKey API with biometric data and optional master password
4. **Data Retrieval**: Backend decrypts and returns the sensitive information
5. **Display**: User sees the decrypted website, username, password, and notes

## 🏗️ Technical Implementation

### Frontend (Angular)

- **Components**: Modular Angular architecture with reusable components
- **Services**: Wallet service for blockchain interactions, password data service for state management
- **Routing**: Clean navigation between password creation, listing, and detail views
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Backend (Node.js + Koa)

- **API Endpoints**: RESTful API for password operations
- **Validation**: Joi-based schema validation for all inputs
- **IPFS Integration**: Pinata API for decentralized storage
- **Blockchain Integration**: Avalanche network for NFT minting

### Security Features

- **Biometric Encryption**: Face data used as encryption key
- **JWT Authentication**: Secure API access with token management
- **Category Validation**: Strict validation of supported data types
- **IPFS Filtering**: Wallet-specific data isolation

## 📱 Current MVP Features

### ✅ Implemented

- **Password Management**: Complete CRUD operations for website passwords
- **Biometric Security**: Face recognition for encryption/decryption
- **NFT Integration**: Automatic NFT creation on Avalanche
- **IPFS Storage**: Decentralized data storage with Pinata
- **User Interface**: Modern, responsive Angular application
- **API Integration**: Full backend integration with validation
- **Mobile Support**: Responsive design for all device sizes

### 🔄 Categories Supported

Currently, the MVP focuses on **password management** with the following structure:
- **Type**: `website_password`
- **Category**: `{zelfName}_password` (e.g., `avax1.zelf_password`)
- **Data Fields**: Website, username, password, notes, timestamp

### 🚧 Categories Planned (Roadmap)

- **Notes**: Secure note storage with rich text support
- **Credit Cards**: Payment card information management
- **Contacts**: Address book and contact details
- **Bank Details**: Banking information and account details

## 🎮 Usage Instructions

### Getting Started

1. **Install Extension**: Load the extension into your browser
2. **Connect Wallet**: Connect your Avalanche wallet (MetaMask, etc.)
3. **Create Password**: Navigate to "Add Password" and fill in details
4. **Verify Identity**: Complete biometric verification
5. **Confirm Storage**: Review and confirm the storage operation

### Managing Passwords

1. **View List**: See all stored passwords in the main dashboard
2. **Access Details**: Click on any password to view full information
3. **Decrypt Data**: Use biometric verification to decrypt sensitive information
4. **Copy Data**: Use the copy button to copy passwords to clipboard

### Security Best Practices

- **Regular Verification**: Re-verify biometric data periodically
- **Master Password**: Consider using an additional master password for extra security
- **Wallet Security**: Keep your Avalanche wallet secure and backed up
- **Network Selection**: Ensure you're connected to the correct Avalanche network

## 🔧 Development Setup

### Prerequisites

- Node.js 18+
- Angular CLI 17+
- Avalanche wallet (MetaMask, etc.)
- Pinata API key (for IPFS storage)

### Installation

```bash
cd extension
npm install
npm run watch:ext
```

### Environment Configuration

Create `environment.ts` with:
- `keysApiUrl`: Backend API endpoint
- `avalancheNetwork`: Avalanche network configuration
- `pinataApiKey`: IPFS storage API key

### Chrome Extension Development Setup

1. **Build the Extension**:
   ```bash
   npm run watch:ext
   ```
   This command will:
   - Build the extension in watch mode
   - Automatically rebuild when files change
   - Output to the `dist/dev/ext/chrome/` directory

2. **Load Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `dist/dev/ext/chrome/` folder from your project
   - The extension will now appear in your extensions list

3. **Development Workflow**:
   - The `npm run watch:ext` command automatically rebuilds the extension
   - After each rebuild, refresh the extension in Chrome:
     - Go to `chrome://extensions/`
     - Click the refresh icon on your ZelfKey extension
   - Or simply reload any page where the extension is active

4. **Testing the Extension**:
   - Pin the extension to your Chrome toolbar for easy access
   - Click the extension icon to open the ZelfKey interface
   - Test all functionality including password creation, storage, and retrieval

## 🧪 Testing

### Unit Tests

```bash
ng test
```

### E2E Tests

```bash
ng e2e
```

### Manual Testing

1. **Extension Loading**: Ensure the extension loads properly in Chrome
2. **Password Creation**: Test the complete password creation flow
3. **Biometric Verification**: Verify face recognition works correctly
4. **Blockchain Integration**: Check NFT minting on Avalanche
5. **IPFS Storage**: Validate data storage and retrieval
6. **Password Management**: Test listing, viewing, and decrypting passwords
7. **Cross-Page Persistence**: Verify extension state persists across page reloads

## 📊 Performance Metrics

- **Storage Time**: ~5-10 seconds (including blockchain confirmation)
- **Retrieval Time**: ~2-3 seconds (including biometric verification)
- **NFT Gas Cost**: ~0.004 AVAX per password
- **IPFS Storage**: ~15KB per password entry

## 🔮 Future Enhancements

### Short Term (1-3 months)
- Additional data categories (notes, contacts, etc.)
- Enhanced biometric options (fingerprint, voice)
- Batch operations for multiple passwords
- Export/import functionality

### Medium Term (3-6 months)
- Multi-chain support (Ethereum, Polygon)
- Advanced encryption algorithms
- Team sharing and collaboration
- API integrations with password managers

### Long Term (6+ months)
- Enterprise features and SSO integration
- Advanced analytics and security insights
- Mobile applications (iOS/Android)
- Hardware wallet integration

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines and development roadmap for details on how to get involved.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Avalanche Foundation** for blockchain infrastructure
- **Pinata** for IPFS storage solutions
- **Angular Team** for the amazing framework
- **Hackathon Community** for inspiration and feedback

---

**Built with ❤️ for the Avalanche ecosystem during Hackathon 2025**
