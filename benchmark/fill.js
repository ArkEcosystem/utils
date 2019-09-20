const utils = require('../dist')
const lodash = require('lodash/fill')

exports['utils'] = () => utils.fill([1, 2, 3], 'a');

exports['lodash'] = () => lodash([1, 2, 3], 'a');
