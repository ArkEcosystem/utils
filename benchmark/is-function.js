const utils = require('../dist')
const lodash = require('lodash/isFunction')

exports['utils'] = () => utils.isFunction('abc');

exports['lodash'] = () => lodash('abc');
