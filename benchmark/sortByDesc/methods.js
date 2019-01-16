const utils = require('../../dist')
const lodash = require('lodash/orderBy')

exports.native = items => items.sort((a, b) => b.producedBlocks - a.producedBlocks)
exports.utils = items => utils.sortByDesc(items, 'producedBlocks')
exports.lodash = items => lodash(items, ['producedBlocks'], ['desc'])
