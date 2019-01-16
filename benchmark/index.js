const Benchmark = require('benchmark');

run([
    bench('Utils.camelCase vs lodash.camelCase', require('./camelCase')),

    bench('Utils.take vs lodash.take (10 wallets)', require('./take/10')),
    bench('Utils.take vs lodash.take (100 wallets)', require('./take/100')),
    bench('Utils.take vs lodash.take (1000 wallets)', require('./take/1000')),
    bench('Utils.take vs lodash.take (10000 wallets)', require('./take/10000')),
    bench('Utils.take vs lodash.take (100000 wallets)', require('./take/100000')),

    bench('Utils.orderBy vs lodash.orderBy (10 wallets)', require('./orderBy/10')),
    bench('Utils.orderBy vs lodash.orderBy (100 wallets)', require('./orderBy/100')),
    bench('Utils.orderBy vs lodash.orderBy (1000 wallets)', require('./orderBy/1000')),
    bench('Utils.orderBy vs lodash.orderBy (10000 wallets)', require('./orderBy/10000')),
    bench('Utils.orderBy vs lodash.orderBy (100000 wallets)', require('./orderBy/100000')),

    bench('Native.sortBy vs Utils.sortBy vs lodash.sortBy (10 wallets)', require('./sortBy/10')),
    bench('Native.sortBy vs Utils.sortBy vs lodash.sortBy (100 wallets)', require('./sortBy/100')),
    bench('Native.sortBy vs Utils.sortBy vs lodash.sortBy (1000 wallets)', require('./sortBy/1000')),
    bench('Native.sortBy vs Utils.sortBy vs lodash.sortBy (10000 wallets)', require('./sortBy/10000')),
    bench('Native.sortBy vs Utils.sortBy vs lodash.sortBy (100000 wallets)', require('./sortBy/100000')),

    bench('Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (10 wallets)', require('./sortByDesc/10')),
    bench('Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (100 wallets)', require('./sortByDesc/100')),
    bench('Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (1000 wallets)', require('./sortByDesc/1000')),
    bench('Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (10000 wallets)', require('./sortByDesc/10000')),
    bench('Native.sortByDesc vs Utils.sortByDesc vs lodash.sortByDesc (100000 wallets)', require('./sortByDesc/100000')),

    bench('Native.map vs Utils.map vs lodash.map (10 wallets)', require('./map/10')),
    bench('Native.map vs Utils.map vs lodash.map (100 wallets)', require('./map/100')),
    bench('Native.map vs Utils.map vs lodash.map (1000 wallets)', require('./map/1000')),
    bench('Native.map vs Utils.map vs lodash.map (10000 wallets)', require('./map/10000')),
    bench('Native.map vs Utils.map vs lodash.map (100000 wallets)', require('./map/100000')),

    bench('Native.forEach vs Utils.forEach vs lodash.forEach (10 wallets)', require('./forEach/10')),
    bench('Native.forEach vs Utils.forEach vs lodash.forEach (100 wallets)', require('./forEach/100')),
    bench('Native.forEach vs Utils.forEach vs lodash.forEach (1000 wallets)', require('./forEach/1000')),
    bench('Native.forEach vs Utils.forEach vs lodash.forEach (10000 wallets)', require('./forEach/10000')),
    bench('Native.forEach vs Utils.forEach vs lodash.forEach (100000 wallets)', require('./forEach/100000')),

    bench('Native.filter vs Utils.filter vs lodash.filter (10 wallets)', require('./filter/10')),
    bench('Native.filter vs Utils.filter vs lodash.filter (100 wallets)', require('./filter/100')),
    bench('Native.filter vs Utils.filter vs lodash.filter (1000 wallets)', require('./filter/1000')),
    bench('Native.filter vs Utils.filter vs lodash.filter (10000 wallets)', require('./filter/10000')),
    bench('Native.filter vs Utils.filter vs lodash.filter (100000 wallets)', require('./filter/100000')),
]);

function bench(title, config) {
    return function (next) {
        var suite = new Benchmark.Suite();
        var keys = Object.keys(config),
            total = keys.length,
            key, i;

        for (i = 0; i < total; i++) {
            key = keys[i];
            suite.add(key, config[key]);
        }

        suite.on('start', function () {
            console.log('  ' + title);
        });
        suite.on('cycle', function (event) {
            console.log("    \033[0;32m\✓\033[0m \033[0;37m " + event.target + "\033[0m");
        });
        suite.on('complete', function () {
            var slowest = this.filter('slowest')[0],
                baselineSuite = this.shift(),
                UtilsSuite = this.shift();

            // In most benchmarks, the first entry is the native implementation and
            // the second entry is the utils one. However, not all benchmarks have
            // a native baseline implementation (e.g. there is none for "clone").
            // In such a case, use the slowest benchmark result as a baseline.
            if (UtilsSuite.name.indexOf('utils') != 0) {
                UtilsSuite = baselineSuite;
                baselineSuite = slowest;
            }

            var diff = UtilsSuite.hz - baselineSuite.hz,
                percentage = ((diff / baselineSuite.hz) * 100).toFixed(2),
                relation = 'faster';

            if (percentage < 0) {
                relation = 'slower';
                percentage *= -1;
            }

            console.log('\n    \033[0;37mResult:\033[0m utils \033[0;37mis\033[0m ' + percentage + '% ' + relation + ' \033[0;37mthan\033[0m ' + baselineSuite.name + '.\n');
            next();
        });
        suite.run({
            async: true
        });
    }
}

function run(benchmarks) {
    var index = -1,
        length = benchmarks.length,
        startTime = Date.now();

    console.log('  \033[0;37mRunning ' + length + ' benchmarks, please wait...\033[0m\n');

    function continuation() {
        index++;
        if (index < length) {
            benchmarks[index](continuation);
        } else {
            var endTime = Date.now(),
                total = Math.ceil((endTime - startTime) / 1000);
            console.log('  \n\033[0;37mFinished in ' + total + ' seconds\033[0m\n');
        }
    }
    continuation();
}
