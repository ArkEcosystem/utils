const {
    native,
    utils
} = require('./methods')

const items = require('../helpers').createWallets(100000);

exports['native'] = () => {
    return native(items);
};

exports['utils'] = () => {
    return utils(items);
};
