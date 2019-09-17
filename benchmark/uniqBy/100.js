const {
    native,
    utils,
    lodash
} = require('./methods')

const items = require('../helpers').createWallets(100);

exports['utils'] = () => {
    return utils(items);
};

exports['lodash'] = () => {
    return lodash(items);
};
