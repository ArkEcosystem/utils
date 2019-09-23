const {
    minBy
} = require('../dist')
const lodash = require('lodash/minBy')

const objects = [{
    'n': 1
}, {
    'n': 2
}];

exports['utils'] = () => minBy(objects, 'n');

exports['lodash'] = () => lodash(objects, 'n');
