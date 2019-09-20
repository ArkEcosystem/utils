const utils = require('../dist')
const lodash = require('lodash/isSymbol')

exports['utils'] = () => utils.isSymbol('abc');

exports['lodash'] = () => lodash('abc');
