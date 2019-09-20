const utils = require('../dist')
const lodash = require('lodash/isEmpty')

exports['utils'] = () => utils.isEmpty('abc');

exports['lodash'] = () => lodash('abc');
