const {
    map
} = require('../../dist');

const items = new Array(10000);

exports['native'] = function () {
    return items.map(user => user);
};

exports['utils'] = function () {
    return map(items, user => user);
};

exports['lodash'] = function () {
    return require('lodash/map')(items, user => user);
};
