const utils = require('../../dist')
const lodash = require('lodash/take')

exports.utils = items => utils.take(items, 10)
exports.lodash = items => lodash(items, 10)
