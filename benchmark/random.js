const utils = require('../dist')
const lodash = require('lodash/random')

exports['utils'] = () => utils.random(1, 10);

exports['lodash'] = () => lodash(1, 10);
