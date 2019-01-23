const { benchmarker } = require('@faustbrian/benchmarker');

benchmarker('utils', [
    { name: 'Utils.orderBy vs lodash.orderBy (10 wallets)', scenarios: require('./orderBy/10') },
    { name: 'Utils.orderBy vs lodash.orderBy (100 wallets)', scenarios: require('./orderBy/100') },
    { name: 'Utils.orderBy vs lodash.orderBy (1000 wallets)', scenarios: require('./orderBy/1000') },
    { name: 'Utils.orderBy vs lodash.orderBy (10000 wallets)', scenarios: require('./orderBy/10000') },
    { name: 'Utils.orderBy vs lodash.orderBy (100000 wallets)', scenarios: require('./orderBy/100000') },

    { name: 'Utils.sortBy vs lodash.sortBy (10 wallets)', scenarios: require('./sortBy/10') },
    { name: 'Utils.sortBy vs lodash.sortBy (100 wallets)', scenarios: require('./sortBy/100') },
    { name: 'Utils.sortBy vs lodash.sortBy (1000 wallets)', scenarios: require('./sortBy/1000') },
    { name: 'Utils.sortBy vs lodash.sortBy (10000 wallets)', scenarios: require('./sortBy/10000') },
    { name: 'Utils.sortBy vs lodash.sortBy (100000 wallets)', scenarios: require('./sortBy/100000') },

    { name: 'Utils.sortByDesc vs lodash.sortByDesc (10 wallets)', scenarios: require('./sortByDesc/10') },
    { name: 'Utils.sortByDesc vs lodash.sortByDesc (100 wallets)', scenarios: require('./sortByDesc/100') },
    { name: 'Utils.sortByDesc vs lodash.sortByDesc (1000 wallets)', scenarios: require('./sortByDesc/1000') },
    { name: 'Utils.sortByDesc vs lodash.sortByDesc (10000 wallets)', scenarios: require('./sortByDesc/10000') },
    { name: 'Utils.sortByDesc vs lodash.sortByDesc (100000 wallets)', scenarios: require('./sortByDesc/100000') },

    { name: 'Native.map vs Utils.map vs lodash.map (10 wallets)', scenarios: require('./map/10') },
    { name: 'Native.map vs Utils.map vs lodash.map (100 wallets)', scenarios: require('./map/100') },
    { name: 'Native.map vs Utils.map vs lodash.map (1000 wallets)', scenarios: require('./map/1000') },
    { name: 'Native.map vs Utils.map vs lodash.map (10000 wallets)', scenarios: require('./map/10000') },
    { name: 'Native.map vs Utils.map vs lodash.map (100000 wallets)', scenarios: require('./map/100000') },

    { name: 'Native.forEach vs Utils.forEach vs lodash.forEach (10 wallets)', scenarios: require('./forEach/10') },
    { name: 'Native.forEach vs Utils.forEach vs lodash.forEach (100 wallets)', scenarios: require('./forEach/100') },
    { name: 'Native.forEach vs Utils.forEach vs lodash.forEach (1000 wallets)', scenarios: require('./forEach/1000') },
    { name: 'Native.forEach vs Utils.forEach vs lodash.forEach (10000 wallets)', scenarios: require('./forEach/10000') },
    { name: 'Native.forEach vs Utils.forEach vs lodash.forEach (100000 wallets)', scenarios: require('./forEach/100000') },

    { name: 'Native.filter vs Utils.filter vs lodash.filter (10 wallets)', scenarios: require('./filter/10') },
    { name: 'Native.filter vs Utils.filter vs lodash.filter (100 wallets)', scenarios: require('./filter/100') },
    { name: 'Native.filter vs Utils.filter vs lodash.filter (1000 wallets)', scenarios: require('./filter/1000') },
    { name: 'Native.filter vs Utils.filter vs lodash.filter (10000 wallets)', scenarios: require('./filter/10000') },
    { name: 'Native.filter vs Utils.filter vs lodash.filter (100000 wallets)', scenarios: require('./filter/100000') },

    { name: 'Native.stringify vs Utils.stringify (10 wallets)', scenarios: require('./stringify/10') },
    { name: 'Native.stringify vs Utils.stringify (100 wallets)', scenarios: require('./stringify/100') },
    { name: 'Native.stringify vs Utils.stringify (1000 wallets)', scenarios: require('./stringify/1000') },
    { name: 'Native.stringify vs Utils.stringify (10000 wallets)', scenarios: require('./stringify/10000') },
    { name: 'Native.stringify vs Utils.stringify (100000 wallets)', scenarios: require('./stringify/100000') },
]);
