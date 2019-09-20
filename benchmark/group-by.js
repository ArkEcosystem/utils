const utils = require('../dist')
const lodash = require('lodash/groupBy')

exports['utils'] = () => utils.groupBy([6.1, 4.2, 6.3], Math.floor);

exports['lodash'] = () => lodash([6.1, 4.2, 6.3], Math.floor);
