const { stringify } = require('../../dist')
const { inspect } = require('util')

exports.native = items => inspect(items);
exports.utils = items => stringify(items);
