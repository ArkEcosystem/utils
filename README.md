# Utilities

<p align="center">
    <img src="./banner.png" />
</p>

[![Codecov](https://badgen.now.sh/codecov/c/github/arkecosystem/utils)](https://codecov.io/gh/arkecosystem/utils)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

> Lead Maintainer: [Brian Faust](https://github.com/faustbrian)

## Caveats

-   The native `map`, `filter`, `reduce` and `forEach` will generally be faster when used on arrays that contain nothing but numerical values.
-   If you plan to use `formatCurrency` method with node.js for anything else then the `en` locale you'll have to make sure to properly setup https://github.com/unicode-org/full-icu-npm as node.js itself only ships with the `en` locale by default unless specifically build with more locales.

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

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](../../contributors).

## License

[MIT](LICENSE) © [ARK Ecosystem](https://ark.io)
