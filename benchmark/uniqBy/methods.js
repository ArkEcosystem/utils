const utils = require('../../dist')
const lodash = require('lodash/uniqBy')

exports.utils = items => utils.uniqBy(items, 'address')
exports.lodash = items => lodash(items, 'address')
