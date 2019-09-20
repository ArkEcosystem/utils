const utils = require('../dist')
const lodash = require('lodash/isBoolean')

exports['utils'] = () => utils.isBoolean('abc');

exports['lodash'] = () => lodash('abc');
