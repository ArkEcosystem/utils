const utils = require('../../dist')
const lodash = require('lodash/filter')

exports.native = items => items.filter(user => user)
exports.utils = items => utils.filter(items, user => user)
exports.lodash = items => lodash(items, user => user)
