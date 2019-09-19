const utils = require('../dist')
const lodash = require('lodash/at')

var object = {
    'a': [{
        'b': {
            'c': 3
        }
    }, 4]
};

exports['utils'] = () => utils.at(object, ['a[0].b.c', 'a[1]']);

exports['lodash'] = () => lodash(object, ['a[0].b.c', 'a[1]']);
