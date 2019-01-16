const utils = require('../../dist')
const lodash = require('lodash/map')

exports.native = items => items.map(user => user)
exports.utils = items => utils.map(items, user => user)
exports.lodash = items => lodash(items, user => user)
