const { camelCase } = require('../dist');

exports['utils'] = function () {
    return camelCase("hello");
};

exports['lodash'] = function () {
    return require('lodash/camelCase')("hello");
};
