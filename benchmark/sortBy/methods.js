const utils = require('../../dist')
const lodash = require('lodash/sortBy')

exports.utils = items => utils.sortBy(items, item => item.producedBlocks)
exports.lodash = items => lodash(items, item => item.producedBlocks)
