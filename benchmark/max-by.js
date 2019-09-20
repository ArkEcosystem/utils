const utils = require('../dist')
const lodash = require('lodash/maxBy')

const objects = [{
    'n': 1
}, {
    'n': 2
}];

exports['utils'] = () => utils.maxBy(objects, 'n');

exports['lodash'] = () => lodash(objects, 'n');
