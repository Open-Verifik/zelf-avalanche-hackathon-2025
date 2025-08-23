// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ZelfKeyNFT
 * @dev Simple NFT contract for ZelfKey QR codes
 */
contract ZelfKeyNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;
    uint256 public maxSupply = 1000000;
    
    constructor() ERC721("ZelfKey NFTs", "ZELFKEY") Ownable(msg.sender) {
        _tokenIdCounter = 1;
    }

    function mintNFT(address to, string memory uri) public onlyOwner returns (uint256) {
        require(_tokenIdCounter <= maxSupply, "Max supply reached");
        
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        
        _mint(to, tokenId);
        _setTokenURI(tokenId, uri);
        
        return tokenId;
    }

    function batchMintNFTs(address[] memory recipients, string[] memory uris) 
        public onlyOwner returns (uint256[] memory) {
        require(recipients.length == uris.length, "Array length mismatch");
        require(recipients.length > 0, "Empty arrays");
        require(_tokenIdCounter + recipients.length <= maxSupply, "Would exceed max supply");
        
        uint256[] memory tokenIds = new uint256[](recipients.length);
        
        for (uint256 i = 0; i < recipients.length; i++) {
            uint256 tokenId = _tokenIdCounter;
            _tokenIdCounter++;
            
            _mint(recipients[i], tokenId);
            _setTokenURI(tokenId, uris[i]);
            
            tokenIds[i] = tokenId;
        }
        
        return tokenIds;
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter - 1;
    }

    function exists(uint256 tokenId) public view returns (bool) {
        return _ownerOf(tokenId) != address(0);
    }

    // Required overrides
    function tokenURI(uint256 tokenId)
        public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}