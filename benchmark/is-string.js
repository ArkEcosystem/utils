const utils = require('../dist')
const lodash = require('lodash/isString')

exports['utils'] = () => utils.isString('abc');

exports['lodash'] = () => lodash('abc');
