# Contributing

Thanks for spending time improving the Nad.fun Monad contracts 👋. This document
keeps contributions predictable and safe.

## Getting started

1. Fork and clone the repo.
2. Copy `env.example` to `.env` and fill in the variables.
3. Install dependencies with `yarn install`.
4. Run `yarn build` once to make sure Hardhat compiles.

## Development workflow

- Branch from `main`. Use descriptive branch names such as
  `feature/liquidity-migration`.
- Follow the existing coding style. Run `yarn format` before pushing.
- Keep pull requests focused. Create a separate PR for audits,
  documentation-only updates, or dependency bumps.
- Add or update unit tests for every behavioral change.
- Run the full suite before requesting reviews:

```bash
yarn lint
yarn test
```

## Commit & PR checklist

- Reference related issues in the PR description.
- Document validations and manual testing steps.
- Attach screenshots for UI / graph changes (if applicable).

Thank you for helping make the project more professional and reliable! 🚀


