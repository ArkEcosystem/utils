const {
    native,
    utils
} = require('./methods')

const items = require('../helpers').createWallets(10000);

exports['native'] = () => {
    return native(items);
};

exports['utils'] = () => {
    return utils(items);
};
