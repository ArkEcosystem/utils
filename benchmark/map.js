const utils = require('../dist')
const lodash = require('lodash/map')


exports['utils'] = () => utils.map([4, 8], n => n * n);

exports['lodash'] = () => lodash([4, 8], n => n * n);
