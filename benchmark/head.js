const utils = require('../dist')
const lodash = require('lodash/head')

exports['utils'] = () => utils.head([1, 2, 3]);

exports['lodash'] = () => lodash([1, 2, 3]);
