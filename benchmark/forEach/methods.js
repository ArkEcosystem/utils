const utils = require('../../dist')
const lodash = require('lodash/forEach')

exports.native = items => items.forEach(user => user)
exports.utils = items => utils.forEach(items, user => user)
exports.lodash = items => lodash(items, user => user)
