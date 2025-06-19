# Cifarm Aptos Smart Contracts Boilerplate

This repository provides a robust boilerplate for developing, testing, and deploying Move smart contracts on the Aptos blockchain. It includes a modular contract system, developer scripts, and a clear workflow for local and testnet development.

## Project Structure

```
smart-contracts/
  contracts/
    aptos/
      contract/
        Move.toml
        README.md
        sources/
          swap/
            router.move
            swap.move
            swap_utils.move
          utils/
            Math.move
            u256.move
        tests/
          swap_test.move
          test_coins.move
      scripts/
        compile.js
        get_abi.js
        publish.js
        test.js
        upgrade.js
    solana/
      contract/
      scripts/
  package.json
  README.md
  test-scripts/
    hello-world.js
```

## Main Move Modules

- **swap.move**: Core Uniswap v2-like AMM logic (pair creation, liquidity, swaps, LP tokens).
- **router.move**: User-facing entry points for creating pairs, adding/removing liquidity, and swapping tokens.
- **swap_utils.move**: Math and type utilities for swap calculations and token sorting.
- **Math.move**: General math utilities (sqrt, min, max, pow).
- **u256.move**: 256-bit integer arithmetic for high-precision calculations.

## Test Modules
- **swap_test.move**: Comprehensive tests for swap, liquidity, and edge cases.
- **test_coins.move**: Test coin definitions and minting utilities for local testing.

## Developer Scripts
All scripts are in `contracts/aptos/scripts/` and can be run via npm scripts (see below):

- **compile.js**: Compile Move contracts using Aptos TS SDK.
- **test.js**: Run Move unit tests.
- **publish.js**: Publish the Move package to Aptos (writes module address to `.env`).
- **upgrade.js**: Upgrade an already published Move package.
- **get_abi.js**: Fetch and save ABI for deployed modules.

## NPM Scripts
Defined in `package.json`:

- `npm run aptos:compile` — Compile Move contracts
- `npm run aptos:test` — Run Move unit tests
- `npm run aptos:publish` — Publish contract and fetch ABI
- `npm run aptos:upgrade` — Upgrade contract and fetch ABI

## Environment Setup
Create a `.env` file in the root with the following variables:

```
PROJECT_NAME=my-aptos-dapp
NEXT_PUBLIC_APP_NETWORK=testnet
NEXT_PUBLIC_APTOS_API_KEY=""
NEXT_MODULE_PUBLISHER_ACCOUNT_ADDRESS=
NEXT_MODULE_PUBLISHER_ACCOUNT_PRIVATE_KEY=
NEXT_PUBLIC_MODULE_ADDRESS=
CIFARM_ACCOUNT_ADDRESS=
DEV_ACCOUNT_ADDRESS=
DEFAULT_ADMIN_ACCOUNT_ADDRESS=
```

- `NEXT_PUBLIC_MODULE_ADDRESS` is set automatically after publishing.
- Never commit private keys to public repositories.

## How to Use

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Initialize your Aptos account**
   ```sh
   aptos init
   # Follows prompts to set up .aptos/config.yaml
   ```
3. **Fund your account (testnet)**
   ```sh
   aptos account fund-with-faucet --account <your_account_address> --amount 100000000
   ```
4. **Compile contracts**
   ```sh
   npm run aptos:compile
   ```
5. **Run tests**
   ```sh
   npm run aptos:test
   ```
6. **Publish contract**
   ```sh
   npm run aptos:publish
   # This will update NEXT_PUBLIC_MODULE_ADDRESS in your .env
   ```
7. **Upgrade contract**
   ```sh
   npm run aptos:upgrade
   ```

## Move.toml Example

```
[package]
name = "CifarmSwap"
version = "1.0.0"

[addresses]
test_coin = "0x16"
zero = "0000000000000000000000000000000000000000000000000000000000000000"
cifarm = "<your_resource_account>"
dev = "<your_original_account>"
default_admin = "<admin_account>"

[dependencies]
AptosFramework = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-framework/", rev = "main" }
AptosStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir = "aptos-move/framework/aptos-stdlib/", rev = "2a458b5ffaaf6a9de6fac679a53912c0be9fe217" }
```

## Testing
- All core logic is covered by Move unit tests in `swap_test.move`.
- Run tests with `npm run aptos:test`.

## Example: Hello World Script
A simple script to check Aptos node connectivity:

```
node test-scripts/hello-world.js
```

## References
- [Aptos Move Book](https://move-language.github.io/move/)
- [Aptos TS SDK](https://github.com/aptos-labs/aptos-ts-sdk)
- [Aptos CLI](https://github.com/aptos-labs/aptos-core/tree/main/crates/aptos)

---

For more details, see `contracts/aptos/contract/README.md` and the Move source files.