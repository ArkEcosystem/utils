const {
    forEach
} = require('../../dist');

const items = new Array(100);

exports['native'] = function () {
    return items.forEach(user => user);
};

exports['utils'] = function () {
    return forEach(items, user => user);
};

exports['lodash'] = function () {
    return require('lodash/forEach')(items, user => user);
};
