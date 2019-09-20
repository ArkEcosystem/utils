const utils = require('../dist')
const lodash = require('lodash/isNumber')

exports['utils'] = () => utils.isNumber('abc');

exports['lodash'] = () => lodash('abc');
