const utils = require('../dist')
const lodash = require('lodash/min')

exports['utils'] = () => utils.min([4, 2, 8, 6]);

exports['lodash'] = () => lodash([4, 2, 8, 6]);
