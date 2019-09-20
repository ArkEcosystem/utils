const utils = require('../dist')
const lodash = require('lodash/mapValues')

const users = {
    'fred': {
        'user': 'fred',
        'age': 40
    },
    'pebbles': {
        'user': 'pebbles',
        'age': 1
    }
};

exports['utils'] = () => utils.mapValues(users, 'age');

exports['lodash'] = () => lodash(users, 'age');
