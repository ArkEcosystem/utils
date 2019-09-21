const utils = require('../dist')
const lodash = require('lodash/words')

exports['utils'] = () => utils.words('fred, barney, & pebbles');

exports['lodash'] = () => lodash('fred, barney, & pebbles');
