const utils = require('../dist')
const lodash = require('lodash/reduce')

exports['utils'] = () => utils.reduce([1, 2], (sum, n) => sum + n, 0);

exports['lodash'] = () => lodash([1, 2], (sum, n) => sum + n, 0);
