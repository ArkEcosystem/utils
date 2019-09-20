const utils = require('../dist')
const lodash = require('lodash/isEqual')

exports['utils'] = () => utils.isEqual('abc');

exports['lodash'] = () => lodash('abc');
