const {
    native,
    utils,
    lodash
} = require('./methods')

const items = require('../helpers').createWallets(100000);

exports['utils'] = () => {
    return utils(items);
};

exports['lodash'] = () => {
    return lodash(items);
};
