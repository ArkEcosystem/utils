const utils = require('../dist')
const lodash = require('lodash/set')

var object = {
    'a': [{
        'b': {
            'c': 3
        }
    }]
};

exports['utils'] = () => utils.set(object, 'a[0].b.c', 4);

exports['lodash'] = () => lodash(object, 'a[0].b.c', 4);
