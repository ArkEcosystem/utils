const utils = require('../dist')
const lodash = require('lodash/pickBy')

exports['utils'] = () => utils.pickBy({
    'a': 1,
    'b': '2',
    'c': 3
}, utils.isNumber);

exports['lodash'] = () => lodash({
    'a': 1,
    'b': '2',
    'c': 3
}, utils.isNumber);
