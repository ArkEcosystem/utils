# Benchmarks

## System

```
OS: Ubuntu 18.04 bionic
Kernel: x86_64 Linux 4.15.0-43-generic
CPU: AMD Ryzen 5 2600 Six-Core @ 12x 3.4GHz
RAM: 32164MiB
```

## Results

```
  Running 36 benchmarks, please wait...

  Utils.camelCase vs lodash.camelCase
    ✓  utils x 20,504,567 ops/sec ±2.14% (78 runs sampled)
    ✓  lodash x 397,904 ops/sec ±1.55% (88 runs sampled)

    Result: utils is 5053.15% faster than lodash.

  Native.take vs Utils.take vs lodash.take (10 wallets)
    ✓  native x 17,154,511 ops/sec ±3.67% (75 runs sampled)
    ✓  utils x 4,242,480 ops/sec ±1.20% (90 runs sampled)
    ✓  lodash x 2,324,604 ops/sec ±1.23% (89 runs sampled)

    Result: utils is 75.27% slower than native.

  Native.take vs Utils.take vs lodash.take (100 wallets)
    ✓  native x 2,616,001 ops/sec ±2.10% (82 runs sampled)
    ✓  utils x 4,196,187 ops/sec ±1.23% (88 runs sampled)
    ✓  lodash x 2,340,947 ops/sec ±0.90% (90 runs sampled)

    Result: utils is 60.40% faster than native.

  Native.take vs Utils.take vs lodash.take (1000 wallets)
    ✓  native x 246,102 ops/sec ±1.57% (85 runs sampled)
    ✓  utils x 4,366,453 ops/sec ±0.85% (92 runs sampled)
    ✓  lodash x 2,390,377 ops/sec ±0.76% (89 runs sampled)

    Result: utils is 1674.25% faster than native.

  Native.take vs Utils.take vs lodash.take (10000 wallets)
    ✓  native x 24,727 ops/sec ±1.55% (88 runs sampled)
    ✓  utils x 4,170,718 ops/sec ±1.21% (86 runs sampled)
    ✓  lodash x 2,382,044 ops/sec ±0.58% (90 runs sampled)

    Result: utils is 16766.76% faster than native.

  Native.take vs Utils.take vs lodash.take (100000 wallets)
    ✓  native x 80.75 ops/sec ±1.48% (67 runs sampled)
    ✓  utils x 3,912,357 ops/sec ±1.16% (88 runs sampled)
    ✓  lodash x 2,322,361 ops/sec ±0.99% (91 runs sampled)

    Result: utils is 4845101.19% faster than native.

  Utils.orderBy vs lodash.orderBy (10 wallets)
    ✓  utils x 1,758,986 ops/sec ±1.59% (83 runs sampled)
    ✓  lodash x 772,367 ops/sec ±2.07% (80 runs sampled)

    Result: utils is 127.74% faster than lodash.

  Utils.orderBy vs lodash.orderBy (100 wallets)
    ✓  utils x 404,101 ops/sec ±1.30% (90 runs sampled)
    ✓  lodash x 148,563 ops/sec ±1.52% (84 runs sampled)

    Result: utils is 172.01% faster than lodash.

  Utils.orderBy vs lodash.orderBy (1000 wallets)
    ✓  utils x 51,562 ops/sec ±0.70% (92 runs sampled)
    ✓  lodash x 15,281 ops/sec ±1.46% (84 runs sampled)

    Result: utils is 237.42% faster than lodash.

  Utils.orderBy vs lodash.orderBy (10000 wallets)
    ✓  utils x 5,307 ops/sec ±0.42% (93 runs sampled)
    ✓  lodash x 1,506 ops/sec ±1.84% (82 runs sampled)

    Result: utils is 252.43% faster than lodash.

  Utils.orderBy vs lodash.orderBy (100000 wallets)
    ✓  utils x 542 ops/sec ±0.72% (88 runs sampled)
    ✓  lodash x 75.01 ops/sec ±3.06% (61 runs sampled)

    Result: utils is 622.24% faster than lodash.

  Native.sortBy vs Utils.sortBy vs lodash.sortBy (10 wallets)
    ✓  native x 2,799,757 ops/sec ±1.58% (81 runs sampled)
    ✓  utils x 1,673,127 ops/sec ±1.72% (81 runs sampled)
    ✓  lodash x 692,902 ops/sec ±2.97% (85 runs sampled)

    Result: utils is 40.24% slower than native.

  Native.sortBy vs Utils.sortBy vs lodash.sortBy (100 wallets)
    ✓  native x 612,157 ops/sec ±1.27% (88 runs sampled)
    ✓  utils x 313,861 ops/sec ±0.99% (88 runs sampled)
    ✓  lodash x 147,385 ops/sec ±1.52% (84 runs sampled)

    Result: utils is 48.73% slower than native.

  Native.sortBy vs Utils.sortBy vs lodash.sortBy (1000 wallets)
    ✓  native x 74,179 ops/sec ±0.38% (92 runs sampled)
    ✓  utils x 34,508 ops/sec ±0.71% (90 runs sampled)
    ✓  lodash x 15,242 ops/sec ±1.33% (86 runs sampled)

    Result: utils is 53.48% slower than native.

  Native.sortBy vs Utils.sortBy vs lodash.sortBy (10000 wallets)
    ✓  native x 7,471 ops/sec ±0.52% (90 runs sampled)
    ✓  utils x 3,561 ops/sec ±0.36% (92 runs sampled)
    ✓  lodash x 1,501 ops/sec ±1.63% (83 runs sampled)

    Result: utils is 52.33% slower than native.

  Native.sortBy vs Utils.sortBy vs lodash.sortBy (100000 wallets)
    ✓  native x 752 ops/sec ±0.58% (90 runs sampled)
    ✓  utils x 347 ops/sec ±1.49% (85 runs sampled)
    ✓  lodash x 76.02 ops/sec ±2.43% (62 runs sampled)

    Result: utils is 53.83% slower than native.

  Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (10 wallets)
    ✓  native x 2,747,239 ops/sec ±1.99% (82 runs sampled)
    ✓  utils x 2,047,559 ops/sec ±1.94% (81 runs sampled)
    ✓  lodash x 710,977 ops/sec ±1.64% (82 runs sampled)

    Result: utils is 25.47% slower than native.

  Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (100 wallets)
    ✓  native x 613,528 ops/sec ±1.17% (87 runs sampled)
    ✓  utils x 421,383 ops/sec ±1.34% (86 runs sampled)
    ✓  lodash x 136,391 ops/sec ±1.68% (84 runs sampled)

    Result: utils is 31.32% slower than native.

  Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (1000 wallets)
    ✓  native x 70,749 ops/sec ±0.76% (90 runs sampled)
    ✓  utils x 50,256 ops/sec ±0.96% (88 runs sampled)
    ✓  lodash x 14,687 ops/sec ±1.66% (82 runs sampled)

    Result: utils is 28.97% slower than native.

  Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (10000 wallets)
    ✓  native x 7,128 ops/sec ±1.57% (88 runs sampled)
    ✓  utils x 5,061 ops/sec ±1.53% (85 runs sampled)
    ✓  lodash x 1,360 ops/sec ±2.52% (79 runs sampled)

    Result: utils is 29% slower than native.

  Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (100000 wallets)
    ✓  native x 737 ops/sec ±0.87% (87 runs sampled)
    ✓  utils x 525 ops/sec ±0.74% (84 runs sampled)
    ✓  lodash x 72.58 ops/sec ±3.06% (59 runs sampled)

    Result: utils is 28.73% slower than native.

  Native.map vs Utils.map vs lodash.map (10 wallets)
    ✓  native x 21,967,097 ops/sec ±1.90% (82 runs sampled)
    ✓  utils x 40,922,203 ops/sec ±1.92% (83 runs sampled)
    ✓  lodash x 6,290,457 ops/sec ±1.83% (82 runs sampled)

    Result: utils is 86.29% faster than native.

  Native.map vs Utils.map vs lodash.map (100 wallets)
    ✓  native x 2,154,534 ops/sec ±2.01% (81 runs sampled)
    ✓  utils x 4,928,227 ops/sec ±2.77% (81 runs sampled)
    ✓  lodash x 740,865 ops/sec ±2.43% (84 runs sampled)

    Result: utils is 128.74% faster than native.

  Native.map vs Utils.map vs lodash.map (1000 wallets)
    ✓  native x 237,224 ops/sec ±1.72% (77 runs sampled)
    ✓  utils x 425,803 ops/sec ±1.45% (84 runs sampled)
    ✓  lodash x 77,203 ops/sec ±1.92% (85 runs sampled)

    Result: utils is 79.49% faster than native.

  Native.map vs Utils.map vs lodash.map (10000 wallets)
    ✓  native x 26,553 ops/sec ±3.52% (84 runs sampled)
    ✓  utils x 43,919 ops/sec ±1.20% (84 runs sampled)
    ✓  lodash x 7,867 ops/sec ±1.53% (86 runs sampled)

    Result: utils is 65.40% faster than native.

  Native.map vs Utils.map vs lodash.map (100000 wallets)
    ✓  native x 1,373 ops/sec ±1.51% (81 runs sampled)
    ✓  utils x 684 ops/sec ±0.82% (88 runs sampled)
    ✓  lodash x 664 ops/sec ±1.10% (83 runs sampled)

    Result: utils is 50.16% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (10 wallets)
    ✓  native x 140,549,108 ops/sec ±1.12% (84 runs sampled)
    ✓  utils x 134,098,772 ops/sec ±1.12% (86 runs sampled)
    ✓  lodash x 8,195,080 ops/sec ±1.04% (89 runs sampled)

    Result: utils is 4.59% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (100 wallets)
    ✓  native x 19,443,468 ops/sec ±1.06% (89 runs sampled)
    ✓  utils x 17,666,726 ops/sec ±0.62% (89 runs sampled)
    ✓  lodash x 979,335 ops/sec ±0.78% (92 runs sampled)

    Result: utils is 9.14% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (1000 wallets)
    ✓  native x 3,235,360 ops/sec ±0.98% (92 runs sampled)
    ✓  utils x 2,244,941 ops/sec ±0.78% (92 runs sampled)
    ✓  lodash x 106,932 ops/sec ±0.52% (91 runs sampled)

    Result: utils is 30.61% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (10000 wallets)
    ✓  native x 333,897 ops/sec ±1.80% (88 runs sampled)
    ✓  utils x 239,093 ops/sec ±0.55% (92 runs sampled)
    ✓  lodash x 10,057 ops/sec ±1.22% (86 runs sampled)

    Result: utils is 28.39% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (100000 wallets)
    ✓  native x 35,620 ops/sec ±1.00% (87 runs sampled)
    ✓  utils x 24,014 ops/sec ±0.81% (90 runs sampled)
    ✓  lodash x 1,001 ops/sec ±0.39% (91 runs sampled)

    Result: utils is 32.58% slower than native.

  Native.filter vs Utils.filter vs lodash.filter (10 wallets)
    ✓  native x 13,944,808 ops/sec ±3.13% (86 runs sampled)
    ✓  utils x 20,127,736 ops/sec ±1.47% (90 runs sampled)
    ✓  lodash x 5,895,367 ops/sec ±1.18% (90 runs sampled)

    Result: utils is 44.34% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (100 wallets)
    ✓  native x 962,674 ops/sec ±1.42% (89 runs sampled)
    ✓  utils x 1,141,238 ops/sec ±1.54% (85 runs sampled)
    ✓  lodash x 486,030 ops/sec ±1.58% (82 runs sampled)

    Result: utils is 18.55% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (1000 wallets)
    ✓  native x 94,069 ops/sec ±1.37% (86 runs sampled)
    ✓  utils x 111,114 ops/sec ±1.26% (82 runs sampled)
    ✓  lodash x 50,459 ops/sec ±1.81% (83 runs sampled)

    Result: utils is 18.12% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (10000 wallets)
    ✓  native x 11,429 ops/sec ±1.68% (83 runs sampled)
    ✓  utils x 14,387 ops/sec ±1.54% (89 runs sampled)
    ✓  lodash x 5,839 ops/sec ±1.79% (88 runs sampled)

    Result: utils is 25.89% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (100000 wallets)
    ✓  native x 535 ops/sec ±2.51% (77 runs sampled)
    ✓  utils x 620 ops/sec ±2.34% (76 runs sampled)
    ✓  lodash x 382 ops/sec ±2.05% (74 runs sampled)

    Result: utils is 15.98% faster than native.


Finished in 604 seconds
```
