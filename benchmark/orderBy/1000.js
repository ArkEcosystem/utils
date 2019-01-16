const {
    native,
    utils,
    lodash
} = require('./methods')

const items = require('../helpers').createWallets(1000);

exports['utils'] = () => {
    return utils(items);
};

exports['lodash'] = () => {
    return lodash(items);
};
