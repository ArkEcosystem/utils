const utils = require('../dist')
const lodash = require('lodash/toString')

exports['utils'] = () => utils.toString([1, 2, 3]);

exports['lodash'] = () => lodash([1, 2, 3]);
