const utils = require('../dist')
const lodash = require('lodash/shuffle')

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

exports['utils'] = () => utils.shuffle(users, 'age');

exports['lodash'] = () => lodash(users, 'age');
