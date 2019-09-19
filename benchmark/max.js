const utils = require('../dist')
const lodash = require('lodash/max')

exports['utils'] = () => utils.max([4, 2, 8, 6]);

exports['lodash'] = () => lodash([4, 2, 8, 6]);
