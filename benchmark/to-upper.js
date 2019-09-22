const utils = require('../dist')
const lodash = require('lodash/toUpper')

exports['native'] = () => '__FOO_BAR__'.toUpperCase();

exports['utils'] = () => utils.toUpper('__FOO_BAR__');

exports['lodash'] = () => lodash('__FOO_BAR__');
