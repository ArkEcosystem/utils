# Benchmarks

> Take those benchmark results with a grain of salt as the outcome will fluctuate, sometimes utils will be faster and sometimes lodash, with a marginal difference.

## System

```
OS: Ubuntu 18.04 bionic
Kernel: x86_64 Linux 4.15.0-43-generic
CPU: AMD Ryzen 5 2600 Six-Core @ 12x 3.4GHz
RAM: 32164MiB
```

## Results

```
  Running 30 benchmarks, please wait...

  Utils.orderBy vs lodash.orderBy (10 wallets)
    ✓  utils x 1,705,589 ops/sec ±2.35% (83 runs sampled)
    ✓  lodash x 719,250 ops/sec ±2.99% (86 runs sampled)

    Result: utils is 137.13% faster than lodash.

  Utils.orderBy vs lodash.orderBy (100 wallets)
    ✓  utils x 396,575 ops/sec ±1.29% (90 runs sampled)
    ✓  lodash x 142,296 ops/sec ±3.05% (78 runs sampled)

    Result: utils is 178.70% faster than lodash.

  Utils.orderBy vs lodash.orderBy (1000 wallets)
    ✓  utils x 50,906 ops/sec ±1.16% (91 runs sampled)
    ✓  lodash x 15,444 ops/sec ±2.90% (81 runs sampled)

    Result: utils is 229.61% faster than lodash.

  Utils.orderBy vs lodash.orderBy (10000 wallets)
    ✓  utils x 5,211 ops/sec ±1.36% (86 runs sampled)
    ✓  lodash x 1,353 ops/sec ±2.55% (83 runs sampled)

    Result: utils is 285.21% faster than lodash.

  Utils.orderBy vs lodash.orderBy (100000 wallets)
    ✓  utils x 528 ops/sec ±0.77% (89 runs sampled)
    ✓  lodash x 72.02 ops/sec ±4.36% (61 runs sampled)

    Result: utils is 632.70% faster than lodash.

  Utils.sortBy vs lodash.sortBy (10 wallets)
    ✓  utils x 1,544,800 ops/sec ±1.83% (83 runs sampled)
    ✓  lodash x 665,081 ops/sec ±2.36% (81 runs sampled)

    Result: utils is 132.27% faster than lodash.

  Utils.sortBy vs lodash.sortBy (100 wallets)
    ✓  utils x 307,526 ops/sec ±1.32% (90 runs sampled)
    ✓  lodash x 138,037 ops/sec ±3.01% (81 runs sampled)

    Result: utils is 122.79% faster than lodash.

  Utils.sortBy vs lodash.sortBy (1000 wallets)
    ✓  utils x 35,503 ops/sec ±0.37% (90 runs sampled)
    ✓  lodash x 15,320 ops/sec ±2.48% (83 runs sampled)

    Result: utils is 131.74% faster than lodash.

  Utils.sortBy vs lodash.sortBy (10000 wallets)
    ✓  utils x 3,581 ops/sec ±0.37% (89 runs sampled)
    ✓  lodash x 1,520 ops/sec ±2.75% (83 runs sampled)

    Result: utils is 135.66% faster than lodash.

  Utils.sortBy vs lodash.sortBy (100000 wallets)
    ✓  utils x 362 ops/sec ±0.89% (86 runs sampled)
    ✓  lodash x 77.40 ops/sec ±3.51% (65 runs sampled)

    Result: utils is 367.70% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (10 wallets)
    ✓  utils x 2,297,695 ops/sec ±2.28% (83 runs sampled)
    ✓  lodash x 801,827 ops/sec ±2.17% (85 runs sampled)

    Result: utils is 186.56% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (100 wallets)
    ✓  utils x 442,433 ops/sec ±1.04% (89 runs sampled)
    ✓  lodash x 137,266 ops/sec ±2.57% (80 runs sampled)

    Result: utils is 222.32% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (1000 wallets)
    ✓  utils x 51,819 ops/sec ±1.07% (90 runs sampled)
    ✓  lodash x 15,367 ops/sec ±2.22% (82 runs sampled)

    Result: utils is 237.22% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (10000 wallets)
    ✓  utils x 5,203 ops/sec ±0.94% (90 runs sampled)
    ✓  lodash x 1,456 ops/sec ±2.57% (81 runs sampled)

    Result: utils is 257.24% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (100000 wallets)
    ✓  utils x 535 ops/sec ±0.54% (87 runs sampled)
    ✓  lodash x 71.34 ops/sec ±4.02% (60 runs sampled)

    Result: utils is 649.70% faster than lodash.

  Native.map vs Utils.map vs lodash.map (10 wallets)
    ✓  native x 21,874,299 ops/sec ±1.57% (84 runs sampled)
    ✓  utils x 37,838,969 ops/sec ±3.91% (81 runs sampled)
    ✓  lodash x 6,359,405 ops/sec ±1.79% (85 runs sampled)

    Result: utils is 72.98% faster than native.

  Native.map vs Utils.map vs lodash.map (100 wallets)
    ✓  native x 1,994,243 ops/sec ±2.65% (79 runs sampled)
    ✓  utils x 4,758,700 ops/sec ±4.96% (82 runs sampled)
    ✓  lodash x 759,071 ops/sec ±1.61% (86 runs sampled)

    Result: utils is 138.62% faster than native.

  Native.map vs Utils.map vs lodash.map (1000 wallets)
    ✓  native x 274,722 ops/sec ±1.44% (84 runs sampled)
    ✓  utils x 405,499 ops/sec ±5.05% (77 runs sampled)
    ✓  lodash x 76,371 ops/sec ±1.89% (85 runs sampled)

    Result: utils is 47.60% faster than native.

  Native.map vs Utils.map vs lodash.map (10000 wallets)
    ✓  native x 24,592 ops/sec ±3.40% (78 runs sampled)
    ✓  utils x 41,363 ops/sec ±4.81% (85 runs sampled)
    ✓  lodash x 7,729 ops/sec ±1.22% (89 runs sampled)

    Result: utils is 68.20% faster than native.

  Native.map vs Utils.map vs lodash.map (100000 wallets)
    ✓  native x 1,303 ops/sec ±1.56% (81 runs sampled)
    ✓  utils x 622 ops/sec ±1.39% (84 runs sampled)
    ✓  lodash x 646 ops/sec ±1.33% (78 runs sampled)

    Result: utils is 52.21% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (10 wallets)
    ✓  native x 126,487,840 ops/sec ±1.79% (84 runs sampled)
    ✓  utils x 126,641,202 ops/sec ±1.02% (86 runs sampled)
    ✓  lodash x 8,357,871 ops/sec ±1.12% (87 runs sampled)

    Result: utils is 0.12% faster than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (100 wallets)
    ✓  native x 18,591,672 ops/sec ±1.18% (89 runs sampled)
    ✓  utils x 17,457,526 ops/sec ±0.75% (89 runs sampled)
    ✓  lodash x 989,247 ops/sec ±0.59% (88 runs sampled)

    Result: utils is 6.1% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (1000 wallets)
    ✓  native x 3,055,758 ops/sec ±1.08% (87 runs sampled)
    ✓  utils x 2,197,107 ops/sec ±0.93% (91 runs sampled)
    ✓  lodash x 103,936 ops/sec ±0.71% (92 runs sampled)

    Result: utils is 28.1% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (10000 wallets)
    ✓  native x 335,075 ops/sec ±1.16% (87 runs sampled)
    ✓  utils x 238,203 ops/sec ±0.53% (93 runs sampled)
    ✓  lodash x 9,982 ops/sec ±0.96% (92 runs sampled)

    Result: utils is 28.91% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (100000 wallets)
    ✓  native x 29,761 ops/sec ±1.36% (79 runs sampled)
    ✓  utils x 24,061 ops/sec ±0.59% (93 runs sampled)
    ✓  lodash x 992 ops/sec ±0.58% (91 runs sampled)

    Result: utils is 19.15% slower than native.

  Native.filter vs Utils.filter vs lodash.filter (10 wallets)
    ✓  native x 11,948,239 ops/sec ±4.25% (78 runs sampled)
    ✓  utils x 16,668,469 ops/sec ±5.00% (79 runs sampled)
    ✓  lodash x 5,388,732 ops/sec ±2.50% (82 runs sampled)

    Result: utils is 39.51% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (100 wallets)
    ✓  native x 863,174 ops/sec ±2.45% (82 runs sampled)
    ✓  utils x 1,019,072 ops/sec ±1.91% (80 runs sampled)
    ✓  lodash x 483,392 ops/sec ±1.55% (83 runs sampled)

    Result: utils is 18.06% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (1000 wallets)
    ✓  native x 90,791 ops/sec ±1.84% (85 runs sampled)
    ✓  utils x 106,511 ops/sec ±1.85% (84 runs sampled)
    ✓  lodash x 50,342 ops/sec ±1.88% (84 runs sampled)

    Result: utils is 17.31% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (10000 wallets)
    ✓  native x 11,077 ops/sec ±2.30% (83 runs sampled)
    ✓  utils x 13,898 ops/sec ±2.33% (85 runs sampled)
    ✓  lodash x 5,596 ops/sec ±1.42% (89 runs sampled)

    Result: utils is 25.47% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (100000 wallets)
    ✓  native x 525 ops/sec ±1.97% (76 runs sampled)
    ✓  utils x 564 ops/sec ±2.35% (77 runs sampled)
    ✓  lodash x 379 ops/sec ±1.63% (73 runs sampled)

    Result: utils is 7.54% faster than native.


Finished in 444 seconds
```
