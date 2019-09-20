const utils = require('../dist')
const lodash = require('lodash/some')

exports['utils'] = () => utils.some([null, 0, 'yes', false], Boolean);

exports['lodash'] = () => lodash([null, 0, 'yes', false], Boolean);
