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
    ✓  utils x 19,168,701 ops/sec ±1.74% (81 runs sampled)
    ✓  lodash x 388,167 ops/sec ±1.25% (90 runs sampled)

    Result: utils is 4838.26% faster than lodash.

  Utils.take vs lodash.take (10 wallets)
    ✓  utils x 28,227,537 ops/sec ±2.25% (82 runs sampled)
    ✓  lodash x 30,551,107 ops/sec ±1.72% (84 runs sampled)

    Result: utils is 0.00% faster than utils.

  Utils.take vs lodash.take (100 wallets)
    ✓  utils x 27,931,469 ops/sec ±1.72% (79 runs sampled)
    ✓  lodash x 29,418,064 ops/sec ±1.83% (84 runs sampled)

    Result: utils is 0.00% faster than utils.

  Utils.take vs lodash.take (1000 wallets)
    ✓  utils x 26,493,202 ops/sec ±3.39% (80 runs sampled)
    ✓  lodash x 29,027,546 ops/sec ±2.11% (83 runs sampled)

    Result: utils is 0.00% faster than utils.

  Utils.take vs lodash.take (10000 wallets)
    ✓  utils x 26,168,607 ops/sec ±2.04% (77 runs sampled)
    ✓  lodash x 27,534,325 ops/sec ±2.11% (84 runs sampled)

    Result: utils is 0.00% faster than utils.

  Utils.take vs lodash.take (100000 wallets)
    ✓  utils x 26,543,647 ops/sec ±3.18% (78 runs sampled)
    ✓  lodash x 29,324,598 ops/sec ±1.67% (85 runs sampled)

    Result: utils is 0.00% faster than utils.

  Utils.orderBy vs lodash.orderBy (10 wallets)
    ✓  utils x 1,660,870 ops/sec ±1.45% (83 runs sampled)
    ✓  lodash x 706,442 ops/sec ±1.57% (80 runs sampled)

    Result: utils is 135.10% faster than lodash.

  Utils.orderBy vs lodash.orderBy (100 wallets)
    ✓  utils x 383,634 ops/sec ±1.42% (87 runs sampled)
    ✓  lodash x 137,844 ops/sec ±2.07% (83 runs sampled)

    Result: utils is 178.31% faster than lodash.

  Utils.orderBy vs lodash.orderBy (1000 wallets)
    ✓  utils x 51,366 ops/sec ±0.40% (90 runs sampled)
    ✓  lodash x 16,431 ops/sec ±1.78% (86 runs sampled)

    Result: utils is 212.61% faster than lodash.

  Utils.orderBy vs lodash.orderBy (10000 wallets)
    ✓  utils x 5,251 ops/sec ±0.38% (91 runs sampled)
    ✓  lodash x 1,554 ops/sec ±1.43% (85 runs sampled)

    Result: utils is 237.99% faster than lodash.

  Utils.orderBy vs lodash.orderBy (100000 wallets)
    ✓  utils x 531 ops/sec ±0.71% (88 runs sampled)
    ✓  lodash x 68.07 ops/sec ±2.51% (58 runs sampled)

    Result: utils is 680.28% faster than lodash.

  Utils.sortBy vs lodash.sortBy (10 wallets)
    ✓  utils x 1,609,744 ops/sec ±1.77% (82 runs sampled)
    ✓  lodash x 677,761 ops/sec ±1.45% (82 runs sampled)

    Result: utils is 137.51% faster than lodash.

  Utils.sortBy vs lodash.sortBy (100 wallets)
    ✓  utils x 309,692 ops/sec ±1.15% (88 runs sampled)
    ✓  lodash x 143,858 ops/sec ±1.47% (85 runs sampled)

    Result: utils is 115.28% faster than lodash.

  Utils.sortBy vs lodash.sortBy (1000 wallets)
    ✓  utils x 35,309 ops/sec ±0.96% (90 runs sampled)
    ✓  lodash x 15,052 ops/sec ±2.14% (84 runs sampled)

    Result: utils is 134.59% faster than lodash.

  Utils.sortBy vs lodash.sortBy (10000 wallets)
    ✓  utils x 3,496 ops/sec ±0.62% (91 runs sampled)
    ✓  lodash x 1,396 ops/sec ±2.06% (77 runs sampled)

    Result: utils is 150.49% faster than lodash.

  Utils.sortBy vs lodash.sortBy (100000 wallets)
    ✓  utils x 360 ops/sec ±0.83% (84 runs sampled)
    ✓  lodash x 68.95 ops/sec ±2.46% (56 runs sampled)

    Result: utils is 422.10% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (10 wallets)
    ✓  utils x 2,083,203 ops/sec ±1.99% (79 runs sampled)
    ✓  lodash x 722,031 ops/sec ±2.12% (82 runs sampled)

    Result: utils is 188.52% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (100 wallets)
    ✓  utils x 417,256 ops/sec ±1.92% (83 runs sampled)
    ✓  lodash x 124,972 ops/sec ±2.33% (81 runs sampled)

    Result: utils is 233.88% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (1000 wallets)
    ✓  utils x 49,448 ops/sec ±1.68% (88 runs sampled)
    ✓  lodash x 14,525 ops/sec ±1.86% (81 runs sampled)

    Result: utils is 240.44% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (10000 wallets)
    ✓  utils x 5,224 ops/sec ±0.52% (87 runs sampled)
    ✓  lodash x 1,454 ops/sec ±1.51% (85 runs sampled)

    Result: utils is 259.36% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (100000 wallets)
    ✓  utils x 531 ops/sec ±0.72% (88 runs sampled)
    ✓  lodash x 70.96 ops/sec ±2.76% (60 runs sampled)

    Result: utils is 647.93% faster than lodash.

  Native.map vs Utils.map vs lodash.map (10 wallets)
    ✓  native x 21,853,856 ops/sec ±1.93% (83 runs sampled)
    ✓  utils x 39,908,211 ops/sec ±3.79% (84 runs sampled)
    ✓  lodash x 6,301,885 ops/sec ±1.26% (84 runs sampled)

    Result: utils is 82.61% faster than native.

  Native.map vs Utils.map vs lodash.map (100 wallets)
    ✓  native x 2,160,764 ops/sec ±1.81% (83 runs sampled)
    ✓  utils x 4,977,158 ops/sec ±1.88% (86 runs sampled)
    ✓  lodash x 732,060 ops/sec ±1.19% (87 runs sampled)

    Result: utils is 130.34% faster than native.

  Native.map vs Utils.map vs lodash.map (1000 wallets)
    ✓  native x 281,326 ops/sec ±1.37% (89 runs sampled)
    ✓  utils x 436,831 ops/sec ±5.83% (83 runs sampled)
    ✓  lodash x 76,790 ops/sec ±1.59% (85 runs sampled)

    Result: utils is 55.28% faster than native.

  Native.map vs Utils.map vs lodash.map (10000 wallets)
    ✓  native x 25,619 ops/sec ±1.69% (80 runs sampled)
    ✓  utils x 45,075 ops/sec ±1.27% (86 runs sampled)
    ✓  lodash x 7,609 ops/sec ±1.55% (84 runs sampled)

    Result: utils is 75.94% faster than native.

  Native.map vs Utils.map vs lodash.map (100000 wallets)
    ✓  native x 1,295 ops/sec ±1.38% (76 runs sampled)
    ✓  utils x 645 ops/sec ±1.15% (84 runs sampled)
    ✓  lodash x 657 ops/sec ±1.46% (86 runs sampled)

    Result: utils is 50.19% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (10 wallets)
    ✓  native x 130,997,211 ops/sec ±1.04% (86 runs sampled)
    ✓  utils x 129,626,490 ops/sec ±1.51% (86 runs sampled)
    ✓  lodash x 7,919,649 ops/sec ±1.84% (86 runs sampled)

    Result: utils is 1.05% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (100 wallets)
    ✓  native x 19,328,428 ops/sec ±0.96% (89 runs sampled)
    ✓  utils x 17,140,866 ops/sec ±1.09% (90 runs sampled)
    ✓  lodash x 979,904 ops/sec ±0.84% (91 runs sampled)

    Result: utils is 11.32% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (1000 wallets)
    ✓  native x 3,097,857 ops/sec ±1.19% (87 runs sampled)
    ✓  utils x 2,225,484 ops/sec ±0.76% (88 runs sampled)
    ✓  lodash x 102,933 ops/sec ±0.94% (92 runs sampled)

    Result: utils is 28.16% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (10000 wallets)
    ✓  native x 324,015 ops/sec ±1.87% (88 runs sampled)
    ✓  utils x 239,431 ops/sec ±0.34% (91 runs sampled)
    ✓  lodash x 10,073 ops/sec ±0.80% (85 runs sampled)

    Result: utils is 26.1% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (100000 wallets)
    ✓  native x 33,223 ops/sec ±1.62% (87 runs sampled)
    ✓  utils x 21,459 ops/sec ±4.18% (89 runs sampled)
    ✓  lodash x 979 ops/sec ±0.86% (91 runs sampled)

    Result: utils is 35.41% slower than native.

  Native.filter vs Utils.filter vs lodash.filter (10 wallets)
    ✓  native x 12,900,382 ops/sec ±1.56% (83 runs sampled)
    ✓  utils x 17,360,727 ops/sec ±2.21% (78 runs sampled)
    ✓  lodash x 5,437,108 ops/sec ±1.91% (85 runs sampled)

    Result: utils is 34.58% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (100 wallets)
    ✓  native x 903,050 ops/sec ±1.45% (84 runs sampled)
    ✓  utils x 1,099,692 ops/sec ±2.40% (82 runs sampled)
    ✓  lodash x 487,270 ops/sec ±1.73% (83 runs sampled)

    Result: utils is 21.78% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (1000 wallets)
    ✓  native x 95,504 ops/sec ±1.35% (87 runs sampled)
    ✓  utils x 113,103 ops/sec ±1.13% (85 runs sampled)
    ✓  lodash x 51,876 ops/sec ±1.43% (84 runs sampled)

    Result: utils is 18.43% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (10000 wallets)
    ✓  native x 11,697 ops/sec ±1.50% (84 runs sampled)
    ✓  utils x 14,912 ops/sec ±1.39% (86 runs sampled)
    ✓  lodash x 5,823 ops/sec ±1.36% (88 runs sampled)

    Result: utils is 27.48% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (100000 wallets)
    ✓  native x 523 ops/sec ±1.82% (78 runs sampled)
    ✓  utils x 659 ops/sec ±2.69% (77 runs sampled)
    ✓  lodash x 403 ops/sec ±1.84% (76 runs sampled)

    Result: utils is 26.04% faster than native.


Finished in 516 seconds
```
