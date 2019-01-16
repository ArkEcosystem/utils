const utils = require('../../dist')
const lodash = require('lodash/sortBy')

exports.native = items => items.sort((a, b) => a.producedBlocks - b.producedBlocks)
exports.utils = items => utils.sortBy(items, item => item.producedBlocks)
exports.lodash = items => lodash(items, item => item.producedBlocks)
