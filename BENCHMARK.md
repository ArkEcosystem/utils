# Benchmarks

> Take those benchmark results with a grain of salt as the outcome will fluctuate, especially with things like `take` where sometimes utils will be faster and sometimes lodash, with a marginal difference.

## System

```
OS: Ubuntu 18.04 bionic
Kernel: x86_64 Linux 4.15.0-43-generic
CPU: AMD Ryzen 5 2600 Six-Core @ 12x 3.4GHz
RAM: 32164MiB
```

## Results

```
  Running 35 benchmarks, please wait...

  Utils.take vs lodash.take (10 wallets)
    ✓  utils x 25,373,500 ops/sec ±2.95% (72 runs sampled)
    ✓  lodash x 27,605,722 ops/sec ±2.52% (83 runs sampled)

    Result: utils is 8.09% slower than lodash.

  Utils.take vs lodash.take (100 wallets)
    ✓  utils x 26,882,661 ops/sec ±2.14% (81 runs sampled)
    ✓  lodash x 28,673,908 ops/sec ±1.88% (80 runs sampled)

    Result: utils is 6.25% slower than lodash.

  Utils.take vs lodash.take (1000 wallets)
    ✓  utils x 27,414,493 ops/sec ±1.94% (80 runs sampled)
    ✓  lodash x 29,273,635 ops/sec ±2.11% (82 runs sampled)

    Result: utils is 6.35% slower than lodash.

  Utils.take vs lodash.take (10000 wallets)
    ✓  utils x 26,553,744 ops/sec ±3.60% (77 runs sampled)
    ✓  lodash x 28,091,945 ops/sec ±1.87% (83 runs sampled)

    Result: utils is 5.48% slower than lodash.

  Utils.take vs lodash.take (100000 wallets)
    ✓  utils x 27,037,632 ops/sec ±1.92% (79 runs sampled)
    ✓  lodash x 29,488,744 ops/sec ±2.05% (83 runs sampled)

    Result: utils is 8.31% slower than lodash.

  Utils.orderBy vs lodash.orderBy (10 wallets)
    ✓  utils x 1,674,487 ops/sec ±2.47% (75 runs sampled)
    ✓  lodash x 712,050 ops/sec ±1.73% (81 runs sampled)

    Result: utils is 135.16% faster than lodash.

  Utils.orderBy vs lodash.orderBy (100 wallets)
    ✓  utils x 406,293 ops/sec ±1.27% (83 runs sampled)
    ✓  lodash x 130,036 ops/sec ±2.04% (79 runs sampled)

    Result: utils is 212.45% faster than lodash.

  Utils.orderBy vs lodash.orderBy (1000 wallets)
    ✓  utils x 50,201 ops/sec ±0.85% (90 runs sampled)
    ✓  lodash x 15,585 ops/sec ±1.62% (85 runs sampled)

    Result: utils is 222.11% faster than lodash.

  Utils.orderBy vs lodash.orderBy (10000 wallets)
    ✓  utils x 5,145 ops/sec ±0.69% (90 runs sampled)
    ✓  lodash x 1,461 ops/sec ±2.16% (83 runs sampled)

    Result: utils is 252.09% faster than lodash.

  Utils.orderBy vs lodash.orderBy (100000 wallets)
    ✓  utils x 532 ops/sec ±1.26% (88 runs sampled)
    ✓  lodash x 76.24 ops/sec ±2.34% (61 runs sampled)

    Result: utils is 597.91% faster than lodash.

  Utils.sortBy vs lodash.sortBy (10 wallets)
    ✓  utils x 1,660,880 ops/sec ±1.72% (83 runs sampled)
    ✓  lodash x 673,565 ops/sec ±1.54% (81 runs sampled)

    Result: utils is 146.58% faster than lodash.

  Utils.sortBy vs lodash.sortBy (100 wallets)
    ✓  utils x 319,739 ops/sec ±0.88% (89 runs sampled)
    ✓  lodash x 144,348 ops/sec ±1.78% (83 runs sampled)

    Result: utils is 121.51% faster than lodash.

  Utils.sortBy vs lodash.sortBy (1000 wallets)
    ✓  utils x 34,193 ops/sec ±1.11% (91 runs sampled)
    ✓  lodash x 15,086 ops/sec ±1.78% (83 runs sampled)

    Result: utils is 126.66% faster than lodash.

  Utils.sortBy vs lodash.sortBy (10000 wallets)
    ✓  utils x 3,484 ops/sec ±2.28% (91 runs sampled)
    ✓  lodash x 1,440 ops/sec ±2.40% (81 runs sampled)

    Result: utils is 141.89% faster than lodash.

  Utils.sortBy vs lodash.sortBy (100000 wallets)
    ✓  utils x 348 ops/sec ±0.99% (86 runs sampled)
    ✓  lodash x 71.25 ops/sec ±3.32% (61 runs sampled)

    Result: utils is 388.38% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (10 wallets)
    ✓  utils x 2,111,339 ops/sec ±1.76% (84 runs sampled)
    ✓  lodash x 748,341 ops/sec ±2.38% (81 runs sampled)

    Result: utils is 182.14% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (100 wallets)
    ✓  utils x 423,395 ops/sec ±1.74% (88 runs sampled)
    ✓  lodash x 146,701 ops/sec ±1.90% (84 runs sampled)

    Result: utils is 188.61% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (1000 wallets)
    ✓  utils x 51,361 ops/sec ±0.51% (91 runs sampled)
    ✓  lodash x 15,078 ops/sec ±1.77% (82 runs sampled)

    Result: utils is 240.63% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (10000 wallets)
    ✓  utils x 5,215 ops/sec ±0.56% (91 runs sampled)
    ✓  lodash x 1,424 ops/sec ±2.60% (78 runs sampled)

    Result: utils is 266.26% faster than lodash.

  Utils.sortByDesc vs lodash.sortByDesc (100000 wallets)
    ✓  utils x 533 ops/sec ±0.48% (87 runs sampled)
    ✓  lodash x 72.12 ops/sec ±2.40% (59 runs sampled)

    Result: utils is 639.44% faster than lodash.

  Native.map vs Utils.map vs lodash.map (10 wallets)
    ✓  native x 22,883,970 ops/sec ±1.74% (82 runs sampled)
    ✓  utils x 39,964,408 ops/sec ±2.11% (83 runs sampled)
    ✓  lodash x 6,343,189 ops/sec ±1.63% (86 runs sampled)

    Result: utils is 74.64% faster than native.

  Native.map vs Utils.map vs lodash.map (100 wallets)
    ✓  native x 2,220,745 ops/sec ±1.44% (75 runs sampled)
    ✓  utils x 5,265,443 ops/sec ±1.96% (85 runs sampled)
    ✓  lodash x 750,248 ops/sec ±1.54% (86 runs sampled)

    Result: utils is 137.10% faster than native.

  Native.map vs Utils.map vs lodash.map (1000 wallets)
    ✓  native x 269,847 ops/sec ±1.47% (84 runs sampled)
    ✓  utils x 423,278 ops/sec ±1.64% (82 runs sampled)
    ✓  lodash x 80,942 ops/sec ±1.07% (88 runs sampled)

    Result: utils is 56.86% faster than native.

  Native.map vs Utils.map vs lodash.map (10000 wallets)
    ✓  native x 27,637 ops/sec ±3.81% (83 runs sampled)
    ✓  utils x 44,093 ops/sec ±4.02% (83 runs sampled)
    ✓  lodash x 7,794 ops/sec ±1.01% (87 runs sampled)

    Result: utils is 59.54% faster than native.

  Native.map vs Utils.map vs lodash.map (100000 wallets)
    ✓  native x 1,387 ops/sec ±1.80% (82 runs sampled)
    ✓  utils x 650 ops/sec ±0.85% (82 runs sampled)
    ✓  lodash x 657 ops/sec ±0.88% (84 runs sampled)

    Result: utils is 53.14% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (10 wallets)
    ✓  native x 131,030,774 ops/sec ±1.62% (79 runs sampled)
    ✓  utils x 126,763,507 ops/sec ±1.58% (84 runs sampled)
    ✓  lodash x 8,472,146 ops/sec ±1.02% (87 runs sampled)

    Result: utils is 3.26% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (100 wallets)
    ✓  native x 19,871,608 ops/sec ±0.75% (83 runs sampled)
    ✓  utils x 17,379,390 ops/sec ±0.97% (88 runs sampled)
    ✓  lodash x 962,100 ops/sec ±1.17% (90 runs sampled)

    Result: utils is 12.54% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (1000 wallets)
    ✓  native x 3,020,315 ops/sec ±1.83% (86 runs sampled)
    ✓  utils x 2,223,084 ops/sec ±0.90% (89 runs sampled)
    ✓  lodash x 105,448 ops/sec ±0.60% (89 runs sampled)

    Result: utils is 26.4% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (10000 wallets)
    ✓  native x 336,333 ops/sec ±1.60% (88 runs sampled)
    ✓  utils x 232,125 ops/sec ±1.01% (90 runs sampled)
    ✓  lodash x 10,161 ops/sec ±1.14% (85 runs sampled)

    Result: utils is 30.98% slower than native.

  Native.forEach vs Utils.forEach vs lodash.forEach (100000 wallets)
    ✓  native x 33,167 ops/sec ±1.68% (86 runs sampled)
    ✓  utils x 21,305 ops/sec ±3.95% (87 runs sampled)
    ✓  lodash x 975 ops/sec ±1.29% (88 runs sampled)

    Result: utils is 35.76% slower than native.

  Native.filter vs Utils.filter vs lodash.filter (10 wallets)
    ✓  native x 12,689,289 ops/sec ±1.59% (82 runs sampled)
    ✓  utils x 17,736,899 ops/sec ±4.68% (78 runs sampled)
    ✓  lodash x 5,337,240 ops/sec ±2.36% (82 runs sampled)

    Result: utils is 39.78% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (100 wallets)
    ✓  native x 887,063 ops/sec ±2.01% (80 runs sampled)
    ✓  utils x 1,095,785 ops/sec ±1.77% (83 runs sampled)
    ✓  lodash x 493,226 ops/sec ±1.80% (85 runs sampled)

    Result: utils is 23.53% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (1000 wallets)
    ✓  native x 78,190 ops/sec ±4.01% (75 runs sampled)
    ✓  utils x 104,971 ops/sec ±1.86% (81 runs sampled)
    ✓  lodash x 51,945 ops/sec ±1.93% (86 runs sampled)

    Result: utils is 34.25% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (10000 wallets)
    ✓  native x 11,356 ops/sec ±1.52% (83 runs sampled)
    ✓  utils x 14,360 ops/sec ±1.83% (81 runs sampled)
    ✓  lodash x 6,053 ops/sec ±1.39% (92 runs sampled)

    Result: utils is 26.46% faster than native.

  Native.filter vs Utils.filter vs lodash.filter (100000 wallets)
    ✓  native x 527 ops/sec ±1.74% (78 runs sampled)
    ✓  utils x 608 ops/sec ±2.42% (77 runs sampled)
    ✓  lodash x 379 ops/sec ±2.46% (79 runs sampled)

    Result: utils is 15.26% faster than native.

  
Finished in 503 seconds
```
