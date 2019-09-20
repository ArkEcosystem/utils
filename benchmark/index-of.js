const utils = require('../dist')
const lodash = require('lodash/indexOf')

exports['utils'] = () => utils.indexOf([1, 2, 1, 2], 2);

exports['lodash'] = () => lodash([1, 2, 1, 2], 2);
