const utils = require('../dist')
const lodash = require('lodash/isNumber')

exports['utils'] = () => utils.isNumber(3);

exports['lodash'] = () => lodash(3);
