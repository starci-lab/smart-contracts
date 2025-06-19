require('dotenv').config();
const { Aptos, Network } = require('@aptos-labs/ts-sdk');

async function main() {
  // Connect to testnet by default, or use custom node URL from .env
  const nodeUrl = process.env.APTOS_NODE_URL || 'https://fullnode.testnet.aptoslabs.com';
  const aptos = new Aptos(nodeUrl);

  try {
    const chainId = await aptos.getChainId();
    console.log('Hello, Aptos! Chain ID:', chainId);
  } catch (err) {
    console.error('Failed to fetch chain ID:', err);
  }
}

main(); 