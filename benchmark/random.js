const {
    random
} = require('../dist')
const lodash = require('lodash/random')

exports['utils'] = () => random(1, 10);

exports['lodash'] = () => lodash(1, 10);
