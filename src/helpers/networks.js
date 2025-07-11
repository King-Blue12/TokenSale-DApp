const networkConfigs = {
  '0x1': {
    chainName: 'Ethereum',
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://etherscan.io/',
    wrapped: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
  '0x3': {
    chainName: 'Ethereum',
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://ropsten.etherscan.io/',
  },
  '0x4': {
    chainName: 'Ethereum',
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://rinkeby.etherscan.io/',
  },
  '0x2a': {
    chainName: 'Ethereum',
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://kovan.etherscan.io/',
  },
  '0x5': {
    chainName: 'Ethereum',
    currencySymbol: 'ETH',
    blockExplorerUrl: 'https://goerli.etherscan.io/',
  },
  '0x539': {
    chainName: 'Local Chain',
    currencyName: 'ETH',
    currencySymbol: 'ETH',
    rpcUrl: 'http://127.0.0.1:7545',
  },
  '0xa86a': {
    chainId: 43114,
    chainName: 'Avalanche Mainnet',
    currencyName: 'AVAX',
    currencySymbol: 'AVAX',
    rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
    blockExplorerUrl: 'https://cchain.explorer.avax.network/',
  },
  '0x38': {
    chainId: 56,
    chainName: 'Binance Smart Chain',
    currencyName: 'BNB',
    currencySymbol: 'BNB',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    blockExplorerUrl: 'https://bscscan.com/',
    wrapped: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  '0x61': {
    chainId: 97,
    chainName: 'Binance Smart Chain - Testnet',
    currencyName: 'BNB',
    currencySymbol: 'BNB',
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    blockExplorerUrl: 'https://testnet.bscscan.com/',
  },
  '0x89': {
    chainId: 137,
    chainName: 'Polygon Mainnet',
    currencyName: 'MATIC',
    currencySymbol: 'MATIC',
    rpcUrl: 'https://rpc-mainnet.maticvigil.com/',
    blockExplorerUrl: 'https://explorer-mainnet.maticvigil.com/',
    wrapped: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  },
  '0x13881': {
    chainId: 80001,
    chainName: 'Mumbai',
    currencyName: 'MATIC',
    currencySymbol: 'MATIC',
    rpcUrl: 'https://rpc-mumbai.matic.today/',
    blockExplorerUrl: 'https://mumbai.polygonscan.com/',
  },
};

const getNativeByChain = (chain) => networkConfigs[chain]?.currencySymbol || 'Native';

const getNetworkByChain = (chain) => networkConfigs[chain]?.chainName || 'Unknown';

const getChainById = (chain) => networkConfigs[chain]?.chainId || null;

const getExplorer = (chain) => networkConfigs[chain]?.blockExplorerUrl;

const getWrappedNative = (chain) => networkConfigs[chain]?.wrapped || null;

export {
  networkConfigs,
  getNativeByChain,
  getNetworkByChain,
  getChainById,
  getExplorer,
  getWrappedNative
};