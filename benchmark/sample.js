const utils = require('../dist')
const lodash = require('lodash/sample')

exports['utils'] = () => utils.sample([1, 2, 3, 4]);

exports['lodash'] = () => lodash([1, 2, 3, 4]);
