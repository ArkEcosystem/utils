const {
    isEqual
} = require('../dist')
const lodash = require('lodash/isEqual')

exports['utils'] = () => isEqual('abc');

exports['lodash'] = () => lodash('abc');
