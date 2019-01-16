const utils = require('../../dist')
const lodash = require('lodash/orderBy')

exports.utils = items => utils.orderBy(items, ['producedBlocks'], ['asc'])
exports.lodash = items => lodash(items, ['producedBlocks'], ['asc'])
