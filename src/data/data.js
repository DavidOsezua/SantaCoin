import {
  binance,
  coinGecko,
  coinMarketPrime,
  PancakeSwap,
  bitget,
  x,
  discord,
  telegram,
} from "../assets";

export const navLinks = [
  {
    link: "AboutUs",
    sectionId: "ID1",
  },

  {
    link: "Tokenomics",
    sectionId: "ID2",
  },
  {
    link: "Roadmap",
    sectionId: "ID3",
  },
];

export const patnerImages = [
  { id: 1, image: binance },
  { id: 2, image: coinGecko },
  { id: 3, image: coinMarketPrime },
  { id: 4, image: bitget },
  { id: 5, image: PancakeSwap },
];

export const faqData = [
  {
    id: 1,
    header: `How do you buy SantaCoin?`,
    text: `Install TrustWallet or MetaMask. Open Firefox or Google Chrome, then go to metamask.io. Create a wallet and download the MetaMask Chrome extension. on a mobile device? Install the MetaMask app on your Android or iPhone.`,
  },
  {
    id: 2,
    header: `When will it launch?`,
    text: `1)Set up TrustWallet or MetaMask Open Firefox or Google Chrome, then go to metamask.io. Create a wallet and download the MetaMask Chrome extension. on a mobile device? Install the MetaMask app on your Android or iPhone.
           2)Buy BNB, USDT, or BUSD from an exchange Buy USDT, BUSD, or BNB on an exchange. Move BNB, USDT, or BUSD to your TrustWallet or MetaMask.
           3)Buy PUDEL after selecting the wallet connection button.
`,
  },
  {
    id: 3,
    header: `When will the stages end?`,
    text: `once we have determined the subsequent stage's cost. For instance, Stage 2 begins at a price increase of $0.00089.`,
  },
  {
    id: 4,
    header: `What is the launch of marketcap?`,
    text: `The marketcap cannot be calculated at this time as tokens are still being sold.`,
  },
  {
    id: 5,
    header: `Santacoin Contract address?`,
    text: `0xD010705f0974E52EBfac6BB28f1D1CfdC7909534`,
  },
];

export const socialMediaImages = [
  { id: 1, image: telegram, link: "https://t.me/+XWEi7ZysuRMzMzc8" },
  { id: 2, image: discord },
  { id: 3, image: x, link: "https://twitter.com/santacentra" },
];
