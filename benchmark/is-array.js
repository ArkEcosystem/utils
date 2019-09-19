const utils = require('../dist')
const lodash = require('lodash/isArray')

exports['utils'] = () => utils.isArray([1, 2, 3]);

exports['lodash'] = () => lodash([1, 2, 3]);
