# Utilities

<p align="center">
    <img src="./banner.png" />
</p>

[![Build Status](https://badgen.now.sh/circleci/github/ArkEcosystem/utils)](https://circleci.com/gh/ArkEcosystem/utils)
[![Codecov](https://badgen.now.sh/codecov/c/github/arkecosystem/utils)](https://codecov.io/gh/arkecosystem/utils)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

> Lead Maintainer: [Brian Faust](https://github.com/faustbrian)

## Installation

```sh
yarn add @arkecosystem/utils
```

## Test

```sh
yarn test:coverage
```

## Benchmark

```sh
git clone git@github.com:ArkEcosystem/utils.git
yarn && yarn bench
```

## Caveats

-   The native `map`, `filter`, `reduce` and `forEach` will generally be faster when used on arrays that contain nothing but numerical values.

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## License

[MIT](LICENSE) © [ARK Ecosystem](https://ark.io)
