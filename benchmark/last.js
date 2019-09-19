const utils = require('../dist')
const lodash = require('lodash/last')

exports['utils'] = () => utils.last([1, 2, 3]);

exports['lodash'] = () => lodash([1, 2, 3]);
