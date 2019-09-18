# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2019-09-18

### Added

-   Added `at` method
-   Added `camelCase` method
-   Added `castArray` method
-   Added `clone` method
-   Added `findKey` method
-   Added `head` method
-   Added `isBoolean` method
-   Added `isNumber` method
-   Added `keyBy` method
-   Added `keys` method
-   Added `last` method
-   Added `lowerCase` method
-   Added `mapValues` method
-   Added `max` method
-   Added `maxBy` method
-   Added `merge` method
-   Added `min` method
-   Added `omitBy` method
-   Added `pascalCase` method
-   Added `pickBy` method
-   Added `pull` method
-   Added `pullAll` method
-   Added `pullAllBy` method
-   Added `random` method
-   Added `reject` method
-   Added `snakeCase` method
-   Added `tail` method
-   Added `toString` method
-   Added `union` method
-   Added `unionBy` method
-   Added `uniqBy` method
-   Added `upperCase` method
-   Added `zipObject` method

## [0.4.0] - 2019-09-16

### Added

-   Added `cappedSet` method
-   Added `chunk` method
-   Added `cloneDeep` method
-   Added `Collection` class
-   Added `groupBy` method
-   Added `hasProperty` method
-   Added `hasSomeProperty` method
-   Added `has` method
-   Added `isArrayOfType` method
-   Added `isBooleanArray` method
-   Added `isConstructor` method
-   Added `isEmpty` method
-   Added `isEqual` method
-   Added `isFunction` method
-   Added `isNil` method
-   Added `isNumberArray` method
-   Added `isObject` method
-   Added `isStringArray` method
-   Added `isString` method
-   Added `isSymbol` method
-   Added `isUndefined` method
-   Added `minBy` method
-   Added `NSect` class
-   Added `OrderedCappedMap` class
-   Added `partition` method
-   Added `pick` method
-   Added `sample` method
-   Added `shuffle` method
-   Added `take` method
-   Added `uniq` method
-   Added `unset` method

## [0.3.0] - 2019-02-27

### Removed

-   Extracted `Dato` into its own package (https://github.com/faustbrian/dato)

## [0.2.7] - 2019-02-27

### Changed

-   Replaced `Dato.make` with the `dato` factory function

## [0.2.6] - 2019-02-27

### Added

-   Support for `string` and `number`

### Changed

-   Replaced `now`, `fromString`, `fromDate` with `make`

### Removed

-   Removed the `now` method
-   Removed the `fromString` method
-   Removed the `fromDate` method

## [0.2.51] - 2019-02-27

### Changed

-   Allow `number`, `Date` and `Dato` as input types

## [0.2.5] - 2019-02-27

### Added

-   Lightweight wrapper around `Dato` that works based on `UTC`

## [0.2.4] - 2019-02-23

### Changed

-   Allow iteratees of orderBy to be functions

## [0.2.3] - 2019-02-16

### Changed

-   Make `sortBy`, `sortByDesc` and `orderBy` generic

## [0.2.2] - 2019-01-23

### Changed

-   Replaced `fast-stringify` with `fast-safe-stringify`

## [0.2.1] - 2019-01-18

### Added

-   Added the `capitalize` function
-   Added the `uncapitalize` function

## [0.2.0] - 2019-01-14

### Added

-   Initial Benchmark Suite

### Removed

-   Removed `lodash.*`
-   Removed `camelCase`

## [0.1.4] - 2019-01-14

### Added

-   Exporting `first` as an alias of `head`

### Changed

-   Replaced `cloneDeep` with `lodash/cloneDeep`
-   Replaced `cloneDeepWith` with `lodash/cloneDeepWith`
-   Replaced `compact` with `lodash/compact`
-   Replaced `pick` with `lodash/pick`
-   Replaced `sample` with `lodash/sample`
-   Replaced `sumBy` with `lodash/sumBy`
-   Replaced `uniq` with `lodash/uniq`

## [0.1.3] - 2019-01-14

### Added

-   Support functions and strings in `sumBy`

### Changed

-   `sortBy` and `sortByDesc` now work without passing any `iteratees`

## [0.1.2] - 2019-01-14

### Fixed

-   Properly build the TypeScript files

## [0.1.1] - 2019-01-14

### Changed

-   `cloneDeep` is now an alias of `copy` from `fast-copy`
-   `camelCase` is now an alias of `camelize` from `xcase`

## 0.1.0 - 2019-01-11

-   Initial Release

[0.5.0]: https://github.com/ArkEcosystem/utils/compare/0.4.0...0.5.0
[0.4.0]: https://github.com/ArkEcosystem/utils/compare/0.3.0...0.4.0
[0.3.0]: https://github.com/ArkEcosystem/utils/compare/0.2.7...0.3.0
[0.2.7]: https://github.com/ArkEcosystem/utils/compare/0.2.6...0.2.7
[0.2.6]: https://github.com/ArkEcosystem/utils/compare/0.2.51...0.2.6
[0.2.51]: https://github.com/ArkEcosystem/utils/compare/0.2.5...0.2.51
[0.2.5]: https://github.com/ArkEcosystem/utils/compare/0.2.4...0.2.5
[0.2.4]: https://github.com/ArkEcosystem/utils/compare/0.2.3...0.2.4
[0.2.4]: https://github.com/ArkEcosystem/utils/compare/0.2.3...0.2.4
[0.2.3]: https://github.com/ArkEcosystem/utils/compare/0.2.2...0.2.3
[0.2.2]: https://github.com/ArkEcosystem/utils/compare/0.2.1...0.2.2
[0.2.1]: https://github.com/ArkEcosystem/utils/compare/0.2.0...0.2.1
[0.2.0]: https://github.com/ArkEcosystem/utils/compare/0.1.4...0.2.0
[0.1.4]: https://github.com/ArkEcosystem/utils/compare/0.1.3...0.1.4
[0.1.3]: https://github.com/ArkEcosystem/utils/compare/0.1.2...0.1.3
[0.1.2]: https://github.com/ArkEcosystem/utils/compare/0.1.1...0.1.2
[0.1.1]: https://github.com/ArkEcosystem/utils/compare/0.1.0...0.1.1
