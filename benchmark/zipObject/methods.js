const utils = require('../../dist')
const lodash = require('lodash/zipObject')

exports.utils = (keys, values) => utils.zipObject(keys, values)
exports.lodash = (keys, values) => lodash(keys, values)
