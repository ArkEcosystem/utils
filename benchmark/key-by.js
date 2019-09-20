const utils = require('../dist')
const lodash = require('lodash/keyBy')

const array = [{
        'dir': 'left',
        'code': 97
    },
    {
        'dir': 'right',
        'code': 100
    }
];

exports['utils'] = () => utils.keyBy(array, 'dir');

exports['lodash'] = () => lodash(array, 'dir');
