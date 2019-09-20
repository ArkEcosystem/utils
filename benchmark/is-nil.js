const utils = require('../dist')
const lodash = require('lodash/isNil')

exports['utils'] = () => utils.isNil('abc');

exports['lodash'] = () => lodash('abc');
