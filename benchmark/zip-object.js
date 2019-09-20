const utils = require('../dist')
const lodash = require('lodash/zipObject')

exports['utils'] = () => utils.zipObject(['a', 'b'], [1, 2]);

exports['lodash'] = () => lodash(['a', 'b'], [1, 2]);
