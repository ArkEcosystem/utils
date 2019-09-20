const utils = require('../dist')
const lodash = require('lodash/castArray')

exports['utils'] = () => utils.castArray('abc');

exports['lodash'] = () => lodash('abc');
