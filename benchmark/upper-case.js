const utils = require('../dist')
const lodash = require('lodash/upperCase')

exports['utils'] = () => utils.upperCase('__FOO_BAR__');

exports['lodash'] = () => lodash('__FOO_BAR__');
