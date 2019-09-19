const utils = require('../dist')
const lodash = require('lodash/camelCase')

exports['utils'] = () => utils.camelCase('Foo Bar');

exports['lodash'] = () => lodash('Foo Bar');
