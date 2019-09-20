const utils = require('../dist')
const lodash = require('lodash/snakeCase')

exports['utils'] = () => utils.snakeCase('Foo Bar');

exports['lodash'] = () => lodash('Foo Bar');
