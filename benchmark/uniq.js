const utils = require('../dist')
const lodash = require('lodash/uniq')

exports['utils'] = () => utils.uniq([2, 1, 2]);

exports['lodash'] = () => lodash([2, 1, 2]);
