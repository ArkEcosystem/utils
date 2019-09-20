const utils = require('../dist')
const lodash = require('lodash/lowerFirst')

exports['utils'] = () => utils.lowerFirst('__FOO_BAR__');

exports['lodash'] = () => lodash('__FOO_BAR__');
