const utils = require('../dist')
const lodash = require('lodash/get')

var object = {
    'a': [{
        'b': {
            'c': 3
        }
    }]
};

exports['utils'] = () => utils.get(object, 'a[0].b.c');

exports['lodash'] = () => lodash(object, 'a[0].b.c');
