const utils = require('../../dist')
const lodash = require('lodash/orderBy')

exports.utils = items => utils.sortByDesc(items, 'producedBlocks')
exports.lodash = items => lodash(items, ['producedBlocks'], ['desc'])
