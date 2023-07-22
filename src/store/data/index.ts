export const CoreContractAddressesByChainId: { [chainId: number]: { [contract: string]: string } } = {
  1: {
    "WETH9": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  },
  4: { // Rinkeby
    "WETH9": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  },
  42: { // Kovan
    "WETH9": "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    "OSWAP_HybridRouter2": "0xf612B4879ADC5713A5c0781F0f431362a69030b5",
    "OSWAP_OracleFactory": "0x02ac522Deb18156CFaE15c7c93da44bd6CC5c967",
    "OSWAP_PeggedOracleFactory": '0x016c6d1Cee7a639D84479372EB1B4fBaDca92a5d',
  },
  56: { // Binance Mainnet
    "WETH9": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "OSWAP_HybridRouter2": "0xFc7261491753C53F0aa168CDB290e47f64C713bB",
    "OSWAP_OracleFactory": "0x8CB1fEE69f7F8f00efd5d47067eb75C19cd40017",
    "OSWAP_RangeFactory": "0xE31e10f0f3f65a4aFe510C460Cda0f9392Fb0e99",
    "OSWAP_RestrictedFactory": "0x91d137464b93caC7E2c2d4444a9D8609E4473B70",
    "OSWAP_PeggedOracleFactory": '0x6ebc906c7f657c17f021f4a3c696a4c625bfbaf0',
  },
  97: { // Binance Test Chain
    "WETH9": "0xae13d989dac2f0debff460ac112a837c89baa7cd",
    "OSWAP_HybridRouter2": "0x58dD8dC6EbE7AE6bbDA3ba5DA10eC08f27D52D31",
    "OSWAP_OracleFactory": "0x03843D530400cB153459d3d64f921940f88b21B2",
    "OSWAP_RangeFactory": "0xbF8C49367377e1bc15faafF1A873fBc692d5411c",
    "OSWAP_RestrictedFactory": "0xa158FB71cA5EF59f707c6F8D0b9CC5765F97Fd60",
    "OSWAP_PeggedOracleFactory": '0xC4539f2e431AD23ab62c5947a99750FEF0Ccf046',
  },
  137: { // Polygon
    "WETH9": "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
  },
  1287: { // Moonbeam
    "WETH9": "0xd614547c5CF8619F8F40445e51c39F93E1D48BFf",
  },
  1337: {
    "WETH9": "0x5162B0a57734dd25865821b177d570827CADCb26",
  },
  31337: {
    "WETH9": "0xBB04C4927A05Cf7d3e329E6333658D48A9313356",
  },
  80001: {//polygon testnet
    "WETH9": '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    "OSWAP_HybridRouter2": "0x0304a5ca544ecf6b8cd04f07b32be10a10df2032",
  },
  43114: { //Avalanche Mainnet C-Chain
    "WETH9": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    "OSWAP_OracleFactory": "0x67c314DC938049150F4c162032bb9645c202Ba71",
    "OSWAP_RangeFactory": "0xEfeAD058e3a16272FD61D978e54D6c7039ae828E",
    "OSWAP_RestrictedFactory": "0x739f0BBcdAd415127FE8d5d6ED053e9D817BdAdb",
    "OSWAP_HybridRouter2": "0xC3F6FE3da0A69621EE9c5bBFa5507f365ad9CFf8",
  },
  43113: {//Avalanche FUJI C-Chain                      
    "WETH9": "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    "OSWAP_HybridRouter2": "0x83445062a0685e47d8228881c594c0A8494E284a",
    "OSWAP_OracleFactory": "0x9D9491e6dF38A68181fb4c24D5c6779DdEFdd6E8",
    "OSWAP_RangeFactory": "0xEcD7f181f90aC33117ac4CfAe55514F1c62433db",
    "OSWAP_RestrictedFactory": "0x6C99c8E2c587706281a5B66bA7617DA7e2Ba6e48",
    "OSWAP_PeggedOracleFactory": '0x728DbD968341eb7aD11bDabFE775A13aF901d6ac',
  },

  250: { // Fantom Opera
    "WETH9": "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
  },
  4002: { // Fantom testnet
    "WETH9": "0xf1277d1Ed8AD466beddF92ef448A132661956621",
    "OSWAP_OracleFactory": '0x28A6a9079fA8e041179cD13F4652af2B315b6fd8',
    "OSWAP_HybridRouter2": '0x1B0D217822719941a1ae3B38eB0A94663e9ad86E',
  },
  13370: { // Amino X Testnet
    "WETH9": "0xCb5e100fdF7d24f25865fa85673D9bD6Bb4674ab",
    "OSWAP_HybridRouter2": "0x567c6Af5Ec3EC2821143179DD4bBAcea5f7A9de9",

    "OSWAP_OracleFactory": "0x227C8E8C4D1baDC6665Cb31C01E0B3D65c5d04B4",
    "OSWAP_RangeFactory": "0x1Db29E80e7eCc82Be98d1deE4Bf3800433212b7e",
    "OSWAP_RestrictedFactory": "0x6B9215FCa70E2972182B7BF427C4D7fCcf5C24e5",
  }
}

export enum Market {
  OPENSWAP,
  UNISWAP,
  SUSHISWAP,
  PANCAKESWAPV1,
  PANCAKESWAP,
  BAKERYSWAP,
  BURGERSWAP,
  IFSWAPV1,
  OPENSWAPV1,
  HYBRID,
  MIXED_QUEUE,
  GROUP_QUEUE,
  QUICKSWAP,
  BISWAP,
  PANGOLIN,
  TRADERJOE,
  SPIRITSWAP,
  SPOOKYSWAP,
  PEGGED_QUEUE,
  HAKUSWAP,
  JETSWAP,
  IFSWAPV3
}
