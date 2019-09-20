const utils = require('../dist')
const lodash = require('lodash/upperFirst')

exports['utils'] = () => utils.upperFirst('__FOO_BAR__');

exports['lodash'] = () => lodash('__FOO_BAR__');
