const Benchmark = require('benchmark');

run([
    bench('Utils.camelCase vs lodash.camelCase', require('./camelCase')),

    bench('Utils.orderBy vs lodash.orderBy (10 items)', require('./orderBy/10')),
    bench('Utils.orderBy vs lodash.orderBy (100 items)', require('./orderBy/100')),
    bench('Utils.orderBy vs lodash.orderBy (1000 items)', require('./orderBy/1000')),
    bench('Utils.orderBy vs lodash.orderBy (10000 items)', require('./orderBy/10000')),
    bench('Utils.orderBy vs lodash.orderBy (100000 items)', require('./orderBy/100000')),

    bench('Utils.sortBy vs lodash.sortBy (10 items)', require('./sortBy/10')),
    bench('Utils.sortBy vs lodash.sortBy (100 items)', require('./sortBy/100')),
    bench('Utils.sortBy vs lodash.sortBy (1000 items)', require('./sortBy/1000')),
    bench('Utils.sortBy vs lodash.sortBy (10000 items)', require('./sortBy/10000')),
    bench('Utils.sortBy vs lodash.sortBy (100000 items)', require('./sortBy/100000')),

    bench('Native.map vs Utils.map vs lodash.map (10 items)', require('./map/10')),
    bench('Native.map vs Utils.map vs lodash.map (100 items)', require('./map/100')),
    bench('Native.map vs Utils.map vs lodash.map (1000 items)', require('./map/1000')),
    bench('Native.map vs Utils.map vs lodash.map (10000 items)', require('./map/10000')),
    bench('Native.map vs Utils.map vs lodash.map (100000 items)', require('./map/100000')),

    bench('Native.forEach vs Utils.forEach vs lodash.forEach (10 items)', require('./forEach/10')),
    bench('Native.forEach vs Utils.forEach vs lodash.forEach (100 items)', require('./forEach/100')),
    bench('Native.forEach vs Utils.forEach vs lodash.forEach (1000 items)', require('./forEach/1000')),
    bench('Native.forEach vs Utils.forEach vs lodash.forEach (10000 items)', require('./forEach/10000')),
    bench('Native.forEach vs Utils.forEach vs lodash.forEach (100000 items)', require('./forEach/100000')),

    bench('Native.filter vs Utils.filter vs lodash.filter (10 items)', require('./filter/10')),
    bench('Native.filter vs Utils.filter vs lodash.filter (100 items)', require('./filter/100')),
    bench('Native.filter vs Utils.filter vs lodash.filter (1000 items)', require('./filter/1000')),
    bench('Native.filter vs Utils.filter vs lodash.filter (10000 items)', require('./filter/10000')),
    bench('Native.filter vs Utils.filter vs lodash.filter (100000 items)', require('./filter/100000')),
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
                fastJSSuite = this.shift();

            // In most benchmarks, the first entry is the native implementation and
            // the second entry is the fast.js one. However, not all benchmarks have
            // a native baseline implementation (e.g. there is none for "clone").
            // In such a case, use the slowest benchmark result as a baseline.
            if (fastJSSuite.name.indexOf('fast') != 0) {
                fastJSSuite = baselineSuite;
                baselineSuite = slowest;
            }

            var diff = fastJSSuite.hz - baselineSuite.hz,
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
