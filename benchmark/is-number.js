const {
    isNumber
} = require('../dist')
const lodash = require('lodash/isNumber')

exports['utils'] = () => isNumber('abc');

exports['lodash'] = () => lodash('abc');
