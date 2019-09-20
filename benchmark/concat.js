const utils = require('../dist')
const lodash = require('lodash/concat')

exports['utils'] = () => utils.concat([1], [2]);

exports['lodash'] = () => lodash([1], [2]);
