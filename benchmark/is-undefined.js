const utils = require('../dist')
const lodash = require('lodash/isUndefined')

exports['utils'] = () => utils.isUndefined('abc');

exports['lodash'] = () => lodash('abc');
