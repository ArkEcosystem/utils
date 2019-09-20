const utils = require('../dist')
const lodash = require('lodash/filter')

const users = [{
        'user': 'barney',
        'age': 36,
        'active': true
    },
    {
        'user': 'fred',
        'age': 40,
        'active': false
    }
];

exports['utils'] = () => utils.filter(users, o => !o.active);

exports['lodash'] = () => lodash(users, o => !o.active);
