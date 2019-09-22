const {
    maxBy
} = require('../dist')
const lodash = require('lodash/maxBy')

const objects = [{
    'n': 1
}, {
    'n': 2
}];

exports['utils'] = () => maxBy(objects, 'n');

exports['lodash'] = () => lodash(objects, 'n');
