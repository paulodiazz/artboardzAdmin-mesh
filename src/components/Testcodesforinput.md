///// THIS IS THE COMPONENT TO CHECK THE USER INPUT FOR SOCIAL MEDIA LINK (Emmy), still testing ////

import React, { useState } from "react";

const VALID_LINK_REGEX = {
  twitter: /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/,
  discord: /^https?:\/\/(www\.)?discord\.gg\/[a-zA-Z0-9]+\/?$/,
  instagram: /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_.]+\/?$/,
};

const LinkInput = () => {
  const [value, setValue] = useState("");
  const [service, setService] = useState("twitter");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (VALID_LINK_REGEX[service].test(value)) {
      console.log(`Valid ${service} link`);
    } else {
      console.log(`Invalid ${service} link`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Service:
        <select value={service} onChange={handleServiceChange}>
          <option value="twitter">Twitter</option>
          <option value="discord">Discord</option>
          <option value="instagram">Instagram</option>
        </select>
      </label>
      <label>
        Link:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LinkInput;






////// USE THIS COMPONENT INCASE AM NOT AROUND //////

import React from "react";
import LinkInput from "../components/LinkInput";

const HomePage = () => {
  return (
    <div>
      <h1>Test the input social links here</h1>
      <LinkInput />
    </div>
  );
};

export default HomePage;






///Modified Code///

import axios from 'axios';

const API_KEY = 'YOUR_BLOCKFROST_API_KEY';
const API_URL = 'https://cardano-mainnet.blockfrost.io/api/v0';

export async function getNFTById(address: string, nftId: string) {
  try {
    const response = await axios.get(`${API_URL}/addresses/${address}`, {
      headers: { 'project_id': API_KEY }
    });
    const data = response.data;

    // Check if the address has any UTXOs (unspent transaction outputs)
    if (!data.utxo.length) {
      throw new Error('No UTXOs found for the specified address');
    }

    // Find the specified NFT by ID
    const nft = data.utxo.flatMap((utxo: any) =>
      utxo.output.amount
        .filter((amt: any) => amt.unit === 'lovelace' && amt.quantity === '0')
        .flatMap((amt: any) =>
          amt.multiasset
            ? Object.keys(amt.multiasset).filter((asset: any) => asset === nftId && Object.keys(amt.multiasset[asset]).length === 1)
            : []
        )
    );

    if (!nft.length) {
      throw new Error(`NFT with ID ${nftId} not found for the specified address`);
    }

    return nft[0];
  } catch (error) {
    console.error(error);
    throw new Error('Error searching for NFT');
  }
}


Nftspage Component

import { useState } from 'react';
import { getNFTsForAddress, getNFTById } from '../utils/blockfrost';

export default function NFTsPage() {
  const [address, setAddress] = useState('');
  const [nftId, setNftId] = useState('');
  const [nfts, setNFTs] = useState<string[]>([]);

  async function handleSearch() {
    let nfts: string[] = [];
    if (nftId) {
      nfts = await getNFTById(address, nftId);
    } else {
      nfts = await getNFTsForAddress(address);
    }
    setNFTs(nfts);
  }

  return (
    <>
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
    </>
  );
}
