const utils = require('../dist')
const lodash = require('lodash/toUpper')

exports['utils'] = () => utils.toUpper('__FOO_BAR__');

exports['lodash'] = () => lodash('__FOO_BAR__');
