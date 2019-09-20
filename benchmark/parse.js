const utils = require('../dist')

const json = JSON.stringify(new Array(1000).fill({
    a: 1,
    b: 2,
    c: 3
}))

exports['native'] = () => JSON.parse(json);

exports['utils'] = () => utils.parse(json);
