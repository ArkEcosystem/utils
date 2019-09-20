const utils = require('../dist')
const lodash = require('lodash/toLower')

exports['utils'] = () => utils.toLower('__FOO_BAR__');

exports['lodash'] = () => lodash('__FOO_BAR__');
