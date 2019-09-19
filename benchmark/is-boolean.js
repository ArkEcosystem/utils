const utils = require('../dist')
const lodash = require('lodash/isBoolean')

exports['utils'] = () => utils.isBoolean(true);

exports['lodash'] = () => lodash(true);
