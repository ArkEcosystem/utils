# Utilities

<p align="center">
    <img src="./banner.png" />
</p>

[![Build Status](https://badgen.now.sh/circleci/github/ArkEcosystem/utils)](https://circleci.com/gh/ArkEcosystem/utils)
[![Codecov](https://badgen.now.sh/codecov/c/github/arkecosystem/utils)](https://codecov.io/gh/arkecosystem/utils)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

> Performance oriented implementations of commonly used functions in TypeScript.

> Lead Maintainer: [Brian Faust](https://github.com/faustbrian)

## Installation

```sh
yarn add @arkecosystem/utils
```

## Test

```sh
yarn test:coverage
```

```sh
| ----------------------- | ---------- | ---------- | ---------- | ---------- | -------------------|
| File                    | % Stmts    | % Branch   | % Funcs    | % Lines    | Uncovered Line #s   |
| ----------------------- | ---------- | ---------- | ---------- | ---------- | ------------------- |
| All files               | 100        | 100        | 100        | 100        |                     |
| capitalize.ts           | 100        | 100        | 100        | 100        |                     |
| capped-set.ts           | 100        | 100        | 100        | 100        |                     |
| chunk.ts                | 100        | 100        | 100        | 100        |                     |
| clone-deep.ts           | 100        | 100        | 100        | 100        |                     |
| collection.ts           | 100        | 100        | 100        | 100        |                     |
| flatten.ts              | 100        | 100        | 100        | 100        |                     |
| get.ts                  | 100        | 100        | 100        | 100        |                     |
| group-by.ts             | 100        | 100        | 100        | 100        |                     |
| has-property.ts         | 100        | 100        | 100        | 100        |                     |
| has-some-property.ts    | 100        | 100        | 100        | 100        |                     |
| has.ts                  | 100        | 100        | 100        | 100        |                     |
| index.ts                | 100        | 100        | 100        | 100        |                     |
| internal.ts             | 100        | 100        | 100        | 100        |                     |
| is-array-of-type.ts     | 100        | 100        | 100        | 100        |                     |
| is-boolean-array.ts     | 100        | 100        | 100        | 100        |                     |
| is-constructor.ts       | 100        | 100        | 100        | 100        |                     |
| is-empty.ts             | 100        | 100        | 100        | 100        |                     |
| is-equal.ts             | 100        | 100        | 100        | 100        |                     |
| is-function.ts          | 100        | 100        | 100        | 100        |                     |
| is-nil.ts               | 100        | 100        | 100        | 100        |                     |
| is-number-array.ts      | 100        | 100        | 100        | 100        |                     |
| is-object.ts            | 100        | 100        | 100        | 100        |                     |
| is-string-array.ts      | 100        | 100        | 100        | 100        |                     |
| is-string.ts            | 100        | 100        | 100        | 100        |                     |
| is-symbol.ts            | 100        | 100        | 100        | 100        |                     |
| is-undefined.ts         | 100        | 100        | 100        | 100        |                     |
| min-by.ts               | 100        | 100        | 100        | 100        |                     |
| nsect.ts                | 100        | 100        | 100        | 100        |                     |
| order-by.ts             | 100        | 100        | 100        | 100        |                     |
| ordered-capped-map.ts   | 100        | 100        | 100        | 100        |                     |
| partition.ts            | 100        | 100        | 100        | 100        |                     |
| pick.ts                 | 100        | 100        | 100        | 100        |                     |
| sample.ts               | 100        | 100        | 100        | 100        |                     |
| set.ts                  | 100        | 100        | 100        | 100        |                     |
| shuffle.ts              | 100        | 100        | 100        | 100        |                     |
| sort-by-desc.ts         | 100        | 100        | 100        | 100        |                     |
| sort-by.ts              | 100        | 100        | 100        | 100        |                     |
| stringify.ts            | 100        | 100        | 100        | 100        |                     |
| take.ts                 | 100        | 100        | 100        | 100        |                     |
| uncapitalize.ts         | 100        | 100        | 100        | 100        |                     |
| uniq.ts                 | 100        | 100        | 100        | 100        |                     |
| unset.ts                | 100        | 100        | 100        | 100        |                     |
| ----------------------- | ---------- | ---------- | ---------- | ---------- | ------------------- |
Test Suites: 41 passed, 41 total
Tests:       123 passed, 123 total
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
