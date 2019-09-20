const {
    benchmarker
} = require("@faustbrian/benchmarker");

benchmarker("utils", [
    { name: "Utils.assign vs lodash.assign", scenarios: require("./assign"), },
    { name: "Utils.at vs lodash.at", scenarios: require("./at"), },
    { name: "Utils.camelCase vs lodash.camelCase", scenarios: require("./camel-case"), },
    { name: "Utils.castArray vs lodash.castArray", scenarios: require("./cast-array"), },
    { name: "Utils.chunk vs lodash.chunk", scenarios: require("./chunk"), },
    { name: "Utils.clone vs lodash.clone", scenarios: require("./clone"), },
    { name: "Utils.cloneDeep vs lodash.cloneDeep", scenarios: require("./clone-deep"), },
    { name: "Utils.concat vs lodash.concat", scenarios: require("./concat"), },
    { name: "Utils.fill vs lodash.fill", scenarios: require("./fill"), },
    { name: "Utils.filterv vs Native.filter cs lodash.filter", scenarios: require("./filter"), },
    { name: "Utils.findKey vs lodash.findKey", scenarios: require("./find-key"), },
    { name: "Utils.flatten vs lodash.flatten", scenarios: require("./flatten"), },
    { name: "Utils.get vs lodash.get", scenarios: require("./get"), },
    { name: "Utils.groupBy vs lodash.groupBy", scenarios: require("./group-by"), },
    { name: "Utils.has vs lodash.has", scenarios: require("./has"), },
    { name: "Utils.head vs lodash.head", scenarios: require("./head"), },
    { name: "Utils.indexOf vs lodash.indexOf", scenarios: require("./index-of"), },
    { name: "Utils.isArray vs lodash.isArray", scenarios: require("./is-array"), },
    { name: "Utils.isArray vs lodash.isArray", scenarios: require("./is-array"), },
    { name: "Utils.isBoolean vs lodash.isBoolean", scenarios: require("./is-boolean"), },
    { name: "Utils.isBoolean vs lodash.isBoolean", scenarios: require("./is-boolean"), },
    { name: "Utils.isEmpty vs lodash.isEmpty", scenarios: require("./is-empty"), },
    { name: "Utils.isEqual vs lodash.isEqual", scenarios: require("./is-equal"), },
    { name: "Utils.isFunction vs lodash.isFunction", scenarios: require("./is-function"), },
    { name: "Utils.isNil vs lodash.isNil", scenarios: require("./is-nil"), },
    { name: "Utils.isNumber vs lodash.isNumber", scenarios: require("./is-number"), },
    { name: "Utils.isNumber vs lodash.isNumber", scenarios: require("./is-number"), },
    { name: "Utils.isObject vs lodash.isObject", scenarios: require("./is-object"), },
    { name: "Utils.isString vs lodash.isString", scenarios: require("./is-string"), },
    { name: "Utils.isString vs lodash.isString", scenarios: require("./is-string"), },
    { name: "Utils.isSymbol vs lodash.isSymbol", scenarios: require("./is-symbol"), },
    { name: "Utils.isUndefined vs lodash.isUndefined", scenarios: require("./is-undefined"), },
    { name: "Utils.keyBy vs lodash.keyBy", scenarios: require("./key-by"), },
    { name: "Utils.keys vs lodash.keys", scenarios: require("./keys"), },
    { name: "Utils.keysIn vs lodash.keysIn", scenarios: require("./keys-in"), },
    { name: "Utils.last vs lodash.last", scenarios: require("./last"), },
    { name: "Utils.lowerCase vs lodash.lowerCase", scenarios: require("./lower-case"), },
    { name: "Utils.map vs Native.map vs lodash.map", scenarios: require("./map"), },
    { name: "Utils.mapValues vs lodash.mapValues", scenarios: require("./map-values"), },
    { name: "Utils.max vs lodash.max", scenarios: require("./max"), },
    { name: "Utils.maxBy vs lodash.maxBy", scenarios: require("./max-by"), },
    { name: "Utils.merge vs lodash.merge", scenarios: require("./merge"), },
    { name: "Utils.min vs lodash.min", scenarios: require("./min"), },
    { name: "Utils.minBy vs lodash.minBy", scenarios: require("./min-by"), },
    { name: "Utils.orderBy vs lodash.orderBy", scenarios: require("./order-by"), },
    { name: "Utils.parse vs lodash.parse", scenarios: require("./parse"), },
    { name: "Utils.partition vs lodash.partition", scenarios: require("./partition"), },
    { name: "Utils.pick vs lodash.pick", scenarios: require("./pick"), },
    { name: "Utils.pickBy vs lodash.pickBy", scenarios: require("./pick-by"), },
    { name: "Utils.pull vs lodash.pull", scenarios: require("./pull"), },
    { name: "Utils.pullAll vs lodash.pullAll", scenarios: require("./pull-all"), },
    { name: "Utils.pullAllBy vs lodash.pullAllBy", scenarios: require("./pull-all-by"), },
    { name: "Utils.random vs lodash.random", scenarios: require("./random"), },
    { name: "Utils.reduce vs lodash.reduce", scenarios: require("./reduce"), },
    { name: "Utils.reject vs lodash.reject", scenarios: require("./reject"), },
    { name: "Utils.sample vs lodash.sample", scenarios: require("./sample"), },
    { name: "Utils.set vs lodash.set", scenarios: require("./set"), },
    { name: "Utils.shuffle vs lodash.shuffle", scenarios: require("./shuffle"), },
    { name: "Utils.snakeCase vs lodash.snakeCase", scenarios: require("./snake-case"), },
    { name: "Utils.some vs lodash.some", scenarios: require("./some"), },
    { name: "Utils.sortBy vs lodash.sortBy", scenarios: require("./sort-by"), },
    { name: "Utils.sortByDesc vs lodash.sortByDesc", scenarios: require("./sort-by-desc"), },
    { name: "Utils.stringifyv vs Native.stringify", scenarios: require("./stringify"), },
    { name: "Utils.tail vs lodash.tail", scenarios: require("./tail"), },
    { name: "Utils.take vs lodash.take", scenarios: require("./take"), },
    { name: "Utils.toLower vs lodash.toLower", scenarios: require("./to-lower"), },
    { name: "Utils.toString vs lodash.toString", scenarios: require("./to-string"), },
    { name: "Utils.toUpper vs lodash.toUpper", scenarios: require("./to-upper"), },
    { name: "Utils.union vs lodash.union", scenarios: require("./union"), },
    { name: "Utils.unionBy vs lodash.unionBy", scenarios: require("./union-by"), },
    { name: "Utils.uniq vs lodash.uniq", scenarios: require("./uniq"), },
    { name: "Utils.uniqBy vs lodash.uniqBy", scenarios: require("./uniq-by"), },
    { name: "Utils.unset vs lodash.unset", scenarios: require("./unset"), },
    { name: "Utils.upperCase vs lodash.upperCase", scenarios: require("./upper-case"), },
    { name: "Utils.upperFirst vs lodash.upperFirst", scenarios: require("./upper-first"), },
    { name: "Utils.zipObject vs lodash.zipObject", scenarios: require("./zip-object"), },
]);
