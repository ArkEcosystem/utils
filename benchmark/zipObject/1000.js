const {
    native,
    utils,
    lodash
} = require('./methods')

const keys = require('../helpers').createStrings(1000);
const values = require('../helpers').createStrings(1000);

exports['utils'] = () => {
    return utils(keys, values);
};

exports['lodash'] = () => {
    return lodash(keys, values);
};
