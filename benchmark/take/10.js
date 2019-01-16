const {
    utils,
    lodash
} = require('./methods')

const items = require('../helpers').createWallets(10);

exports['utils'] = () => {
    return utils(items);
};

exports['lodash'] = () => {
    return lodash(items);
};
