import { useState } from 'react';
import { getNFTsForAddress, getNFTById } from '../../utils/blockfrost';

function NFTsPage() {
  const [address, setAddress] = useState('');
  const [nftId, setNftId] = useState('');
  const [nfts, setNfts] = useState([]);

  async function handleSearch() {
    let nfts = [];
    if (nftId) {
      nfts = await getNFTById(address, nftId);
    } else {
      nfts = await getNFTsForAddress(address);
    }
    setNfts(nfts);
  }

  return (
    <div>
      <h1>Search for NFTs</h1>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        NFT ID (optional):
        <input type="text" value={nftId} onChange={(e) => setNftId(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>
      {nfts.length > 0 && (
        <div>
          <h2>NFTs for {address}:</h2>
          <ul>
            {nfts.map((nft) => (
              <li key={nft}>{nft}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NFTsPage;
