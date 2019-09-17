const {
    native,
    utils,
    lodash
} = require('./methods')

const keys = require('../helpers').createStrings(10000);
const values = require('../helpers').createStrings(10000);

exports['utils'] = () => {
    return utils(keys, values);
};

exports['lodash'] = () => {
    return lodash(keys, values);
};
