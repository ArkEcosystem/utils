const utils = require('../../dist')
const lodash = require('lodash/take')

exports.native = items => items.map(item => item.address)
exports.utils = items => utils.take(items, ['address'])
exports.lodash = items => lodash(items, ['address'])
