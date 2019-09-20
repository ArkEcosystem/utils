const utils = require('../dist')
const lodash = require('lodash/union')

exports['utils'] = () => utils.union([2], [1, 2]);

exports['lodash'] = () => lodash([2], [1, 2]);
