const utils = require('../dist')
const lodash = require('lodash/lowerCase')

exports['utils'] = () => utils.lowerCase('__FOO_BAR__');

exports['lodash'] = () => lodash('__FOO_BAR__');
