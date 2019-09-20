const {
    benchmarker
} = require("@faustbrian/benchmarker");

benchmarker("utils", [
    // Public
    {
        name: "Utils.orderBy vs lodash.orderBy (10 wallets)",
        scenarios: require("./orderBy/10"),
    },
    {
        name: "Utils.orderBy vs lodash.orderBy (100 wallets)",
        scenarios: require("./orderBy/100"),
    },
    {
        name: "Utils.orderBy vs lodash.orderBy (1000 wallets)",
        scenarios: require("./orderBy/1000"),
    },
    {
        name: "Utils.orderBy vs lodash.orderBy (10000 wallets)",
        scenarios: require("./orderBy/10000"),
    },
    {
        name: "Utils.orderBy vs lodash.orderBy (100000 wallets)",
        scenarios: require("./orderBy/100000"),
    },
    {
        name: "Utils.sortBy vs lodash.sortBy (10 wallets)",
        scenarios: require("./sortBy/10"),
    },
    {
        name: "Utils.sortBy vs lodash.sortBy (100 wallets)",
        scenarios: require("./sortBy/100"),
    },
    {
        name: "Utils.sortBy vs lodash.sortBy (1000 wallets)",
        scenarios: require("./sortBy/1000"),
    },
    {
        name: "Utils.sortBy vs lodash.sortBy (10000 wallets)",
        scenarios: require("./sortBy/10000"),
    },
    {
        name: "Utils.sortBy vs lodash.sortBy (100000 wallets)",
        scenarios: require("./sortBy/100000"),
    },
    {
        name: "Utils.sortByDesc vs lodash.sortByDesc (10 wallets)",
        scenarios: require("./sortByDesc/10"),
    },
    {
        name: "Utils.sortByDesc vs lodash.sortByDesc (100 wallets)",
        scenarios: require("./sortByDesc/100"),
    },
    {
        name: "Utils.sortByDesc vs lodash.sortByDesc (1000 wallets)",
        scenarios: require("./sortByDesc/1000"),
    },
    {
        name: "Utils.sortByDesc vs lodash.sortByDesc (10000 wallets)",
        scenarios: require("./sortByDesc/10000"),
    },
    {
        name: "Utils.sortByDesc vs lodash.sortByDesc (100000 wallets)",
        scenarios: require("./sortByDesc/100000"),
    },
    {
        name: "Native.map vs Utils.map vs lodash.map (10 wallets)",
        scenarios: require("./map/10"),
    },
    {
        name: "Native.map vs Utils.map vs lodash.map (100 wallets)",
        scenarios: require("./map/100"),
    },
    {
        name: "Native.map vs Utils.map vs lodash.map (1000 wallets)",
        scenarios: require("./map/1000"),
    },
    {
        name: "Native.map vs Utils.map vs lodash.map (10000 wallets)",
        scenarios: require("./map/10000"),
    },
    {
        name: "Native.map vs Utils.map vs lodash.map (100000 wallets)",
        scenarios: require("./map/100000"),
    },
    {
        name: "Native.filter vs Utils.filter vs lodash.filter (10 wallets)",
        scenarios: require("./filter/10"),
    },
    {
        name: "Native.filter vs Utils.filter vs lodash.filter (100 wallets)",
        scenarios: require("./filter/100"),
    },
    {
        name: "Native.filter vs Utils.filter vs lodash.filter (1000 wallets)",
        scenarios: require("./filter/1000"),
    },
    {
        name: "Native.filter vs Utils.filter vs lodash.filter (10000 wallets)",
        scenarios: require("./filter/10000"),
    },
    {
        name: "Native.filter vs Utils.filter vs lodash.filter (100000 wallets)",
        scenarios: require("./filter/100000"),
    },
    {
        name: "Native.stringify vs Utils.stringify (10 wallets)",
        scenarios: require("./stringify/10"),
    },
    {
        name: "Native.stringify vs Utils.stringify (100 wallets)",
        scenarios: require("./stringify/100"),
    },
    {
        name: "Native.stringify vs Utils.stringify (1000 wallets)",
        scenarios: require("./stringify/1000"),
    },
    {
        name: "Native.stringify vs Utils.stringify (10000 wallets)",
        scenarios: require("./stringify/10000"),
    },
    {
        name: "Native.stringify vs Utils.stringify (100000 wallets)",
        scenarios: require("./stringify/100000"),
    },
    {
        name: "Utils.uniqBy vs lodash.uniqBy (10 wallets)",
        scenarios: require("./uniqBy/10"),
    },
    {
        name: "Utils.uniqBy vs lodash.uniqBy (100 wallets)",
        scenarios: require("./uniqBy/100"),
    },
    {
        name: "Utils.uniqBy vs lodash.uniqBy (1000 wallets)",
        scenarios: require("./uniqBy/1000"),
    },
    {
        name: "Utils.uniqBy vs lodash.uniqBy (10000 wallets)",
        scenarios: require("./uniqBy/10000"),
    },
    {
        name: "Utils.uniqBy vs lodash.uniqBy (100000 wallets)",
        scenarios: require("./uniqBy/100000"),
    },
    {
        name: "Utils.zipObject vs lodash.zipObject (10 pairs)",
        scenarios: require("./zipObject/10"),
    },
    {
        name: "Utils.zipObject vs lodash.zipObject (100 pairs)",
        scenarios: require("./zipObject/100"),
    },
    {
        name: "Utils.zipObject vs lodash.zipObject (1000 pairs)",
        scenarios: require("./zipObject/1000"),
    },
    {
        name: "Utils.zipObject vs lodash.zipObject (10000 pairs)",
        scenarios: require("./zipObject/10000"),
    },
    {
        name: "Utils.zipObject vs lodash.zipObject (100000 pairs)",
        scenarios: require("./zipObject/100000"),
    },
    {
        name: "Utils.assign vs lodash.assign",
        scenarios: require("./assign"),
    },
    {
        name: "Utils.at vs lodash.at",
        scenarios: require("./at"),
    },
    {
        name: "Utils.camelCase vs lodash.camelCase",
        scenarios: require("./camel-case"),
    },
    {
        name: "Utils.chunk vs lodash.chunk",
        scenarios: require("./chunk"),
    },
    {
        name: "Utils.clone vs lodash.clone",
        scenarios: require("./clone"),
    },
    {
        name: "Utils.cloneDeep vs lodash.cloneDeep",
        scenarios: require("./clone-deep"),
    },
    {
        name: "Utils.head vs lodash.head",
        scenarios: require("./head"),
    },
    {
        name: "Utils.tail vs lodash.tail",
        scenarios: require("./tail"),
    },
    {
        name: "Utils.last vs lodash.last",
        scenarios: require("./last"),
    },
    {
        name: "Utils.isString vs lodash.isString",
        scenarios: require("./is-string"),
    },
    {
        name: "Utils.isNumber vs lodash.isNumber",
        scenarios: require("./is-number"),
    },
    {
        name: "Utils.isArray vs lodash.isArray",
        scenarios: require("./is-array"),
    },
    {
        name: "Utils.isBoolean vs lodash.isBoolean",
        scenarios: require("./is-boolean"),
    },
    {
        name: "Utils.keys vs lodash.keys",
        scenarios: require("./keys"),
    },
    {
        name: "Utils.min vs lodash.min",
        scenarios: require("./min"),
    },
    {
        name: "Utils.max vs lodash.max",
        scenarios: require("./max"),
    },
    {
        name: "Utils.flatten vs lodash.flatten",
        scenarios: require("./flatten"),
    },
    {
        name: "Utils.get vs lodash.get",
        scenarios: require("./get"),
    },
    {
        name: "Utils.set vs lodash.set",
        scenarios: require("./set"),
    },
    {
        name: "Utils.has vs lodash.has",
        scenarios: require("./has"),
    },
    {
        name: "Utils.unset vs lodash.unset",
        scenarios: require("./unset"),
    },
    {
        name: "Utils.lowerCase vs lodash.lowerCase",
        scenarios: require("./lower-case"),
    },
    {
        name: "Utils.upperCase vs lodash.upperCase",
        scenarios: require("./upper-case"),
    },
    {
        name: "Utils.toLower vs lodash.toLower",
        scenarios: require("./to-lower"),
    },
    {
        name: "Utils.toUpper vs lodash.toUpper",
        scenarios: require("./to-upper"),
    },
    {
        name: "Utils.parse vs lodash.parse",
        scenarios: require("./parse"),
    },
    {
        name: "Utils.upperFirst vs lodash.upperFirst",
        scenarios: require("./upper-first"),
    },
    {
        name: "Utils.uniq vs lodash.uniq",
        scenarios: require("./uniq"),
    },
    {
        name: "Utils.isArray vs lodash.isArray",
        scenarios: require("./is-array"),
    },
    {
        name: "Utils.isBoolean vs lodash.isBoolean",
        scenarios: require("./is-boolean"),
    },
    {
        name: "Utils.isEmpty vs lodash.isEmpty",
        scenarios: require("./is-empty"),
    },
    {
        name: "Utils.isEqual vs lodash.isEqual",
        scenarios: require("./is-equal"),
    },
    {
        name: "Utils.isFunction vs lodash.isFunction",
        scenarios: require("./is-function"),
    },
    {
        name: "Utils.isNil vs lodash.isNil",
        scenarios: require("./is-nil"),
    },
    {
        name: "Utils.isNumber vs lodash.isNumber",
        scenarios: require("./is-number"),
    },
    {
        name: "Utils.isObject vs lodash.isObject",
        scenarios: require("./is-object"),
    },
    {
        name: "Utils.isString vs lodash.isString",
        scenarios: require("./is-string"),
    },
    {
        name: "Utils.isSymbol vs lodash.isSymbol",
        scenarios: require("./is-symbol"),
    },
    {
        name: "Utils.isUndefined vs lodash.isUndefined",
        scenarios: require("./is-undefined"),
    },
    {
        name: "Utils.castArray vs lodash.castArray",
        scenarios: require("./cast-array"),
    },
    {
        name: "Utils.concat vs lodash.concat",
        scenarios: require("./concat"),
    },
    {
        name: "Utils.fill vs lodash.fill",
        scenarios: require("./fill"),
    },
    {
        name: "Utils.findKey vs lodash.findKey",
        scenarios: require("./find-key"),
    },
    {
        name: "Utils.indexOf vs lodash.indexOf",
        scenarios: require("./index-of"),
    },
    {
        name: "Utils.groupBy vs lodash.groupBy",
        scenarios: require("./group-by"),
    },
    {
        name: "Utils.keyBy vs lodash.keyBy",
        scenarios: require("./key-by"),
    },
    {
        name: "Utils.keysIn vs lodash.keysIn",
        scenarios: require("./keys-in"),
    },
    {
        name: "Utils.maxBy vs lodash.maxBy",
        scenarios: require("./max-by"),
    },
    {
        name: "Utils.minBy vs lodash.minBy",
        scenarios: require("./min-by"),
    },
    {
        name: "Utils.mapValues vs lodash.mapValues",
        scenarios: require("./map-values"),
    },
    {
        name: "Utils.merge vs lodash.merge",
        scenarios: require("./merge"),
    },
    {
        name: "Utils.shuffle vs lodash.shuffle",
        scenarios: require("./shuffle"),
    },
    {
        name: "Utils.reject vs lodash.reject",
        scenarios: require("./reject"),
    },
    {
        name: "Utils.sample vs lodash.sample",
        scenarios: require("./sample"),
    },
    {
        name: "Utils.snakeCase vs lodash.snakeCase",
        scenarios: require("./snake-case"),
    },
    {
        name: "Utils.toString vs lodash.toString",
        scenarios: require("./to-string"),
    },
    {
        name: "Utils.take vs lodash.take",
        scenarios: require("./take"),
    },
    {
        name: "Utils.union vs lodash.union",
        scenarios: require("./union"),
    },
    {
        name: "Utils.unionBy vs lodash.unionBy",
        scenarios: require("./union-by"),
    },
    {
        name: "Utils.some vs lodash.some",
        scenarios: require("./some"),
    },
    {
        name: "Utils.reduce vs lodash.reduce",
        scenarios: require("./reduce"),
    },
    {
        name: "Utils.random vs lodash.random",
        scenarios: require("./random"),
    },
    {
        name: "Utils.pull vs lodash.pull",
        scenarios: require("./pull"),
    },
    {
        name: "Utils.pullAll vs lodash.pullAll",
        scenarios: require("./pull-all"),
    },
    {
        name: "Utils.pullAllBy vs lodash.pullAllBy",
        scenarios: require("./pull-all-by"),
    },
    {
        name: "Utils.partition vs lodash.partition",
        scenarios: require("./partition"),
    },
    {
        name: "Utils.pick vs lodash.pick",
        scenarios: require("./pick"),
    },
    {
        name: "Utils.pickBy vs lodash.pickBy",
        scenarios: require("./pick-by"),
    },
]);
