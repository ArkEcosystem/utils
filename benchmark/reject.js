const utils = require('../dist')
const lodash = require('lodash/reject')

const users = [{
        'user': 'barney',
        'age': 36,
        'active': false
    },
    {
        'user': 'fred',
        'age': 40,
        'active': true
    }
];
exports['utils'] = () => utils.reject(users, 'active');

exports['lodash'] = () => lodash(users, 'active');
