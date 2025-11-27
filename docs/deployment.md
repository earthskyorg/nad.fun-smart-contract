# Deployment Playbook

This guide describes the recommended deployment workflow for the Nad.fun Monad
contracts using Hardhat.

## 1. Prerequisites

- Node.js 20+
- Yarn 1.x
- Funded wallet on Monad testnet / mainnet
- Uniswap-compatible router + WETH addresses for the target network

## 2. Configure environment

1. Copy `env.example` to `.env`.
2. Populate:

   ```bash
   PRIVATE_KEY=0x...
   UNISWAP_ROUTER_ADDRESS=0x...
   RPC_MONAD_TESTNET=https://...
   RPC_MONAD_MAINNET=https://...
   ENABLE_GAS_REPORT=true # optional
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

## 3. Dry-run locally

```bash
yarn clean && yarn build
yarn test
```

Optional coverage and linting:

```bash
yarn coverage
yarn lint
```

## 4. Deploy

- **Testnet**:

  ```bash
  yarn deploy:testnet
  ```

- **Mainnet**:

  ```bash
  yarn deploy:mainnet
  ```

Each command executes `scripts/deploy.ts`, which validates that the
`UNISWAP_ROUTER_ADDRESS` variable is set before deploying `PumpCloneFactory`.

## 5. Post-deployment

- Store the resulting factory address in your frontend/config repo.
- Run `npx hardhat verify` or Sourcify verification if the target explorer
  supports it.
- Update the README / changelog with the newly deployed version.


