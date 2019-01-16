const {
    utils,
    lodash
} = require('./methods')

const items = require('../helpers').createWallets(10000);

exports['utils'] = () => {
    return utils(items);
};

exports['lodash'] = () => {
    return lodash(items);
};
