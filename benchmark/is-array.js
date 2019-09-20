const utils = require('../dist')
const lodash = require('lodash/isArray')

exports['utils'] = () => utils.isArray('abc');

exports['lodash'] = () => lodash('abc');
