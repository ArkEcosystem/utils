const utils = require('../dist')
const lodash = require('lodash/isObject')

exports['utils'] = () => utils.isObject('abc');

exports['lodash'] = () => lodash('abc');
