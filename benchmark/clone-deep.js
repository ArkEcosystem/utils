const utils = require('../dist')
const lodash = require('lodash/cloneDeep')

const objects = [{
    a: 1
}, {
    b: 2
}];

exports['utils'] = () => utils.cloneDeep(objects);

exports['lodash'] = () => lodash(objects);
