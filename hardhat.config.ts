import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const {
  PRIVATE_KEY,
  RPC_MONAD_MAINNET,
  RPC_MONAD_TESTNET,
  ENABLE_GAS_REPORT,
  CMC_API_KEY,
} = process.env;

const accounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];
const gasReporterEnabled = ENABLE_GAS_REPORT === "true";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    monadMainnet: {
      url: RPC_MONAD_MAINNET || "https://rpc.monad.xyz",
      chainId: 143,
      accounts,
    },
    monadTestnet: {
      url: RPC_MONAD_TESTNET || "https://testnet-rpc.monad.xyz",
      chainId: 10143,
      accounts,
    },
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://sourcify-api-monad.blockvision.org",
    browserUrl: "https://monadvision.com",
  },
  gasReporter: {
    enabled: gasReporterEnabled,
    currency: "USD",
    token: "ETH",
    coinmarketcap: CMC_API_KEY,
  },
  etherscan: {
    enabled: false,
  },
};

export default config;
