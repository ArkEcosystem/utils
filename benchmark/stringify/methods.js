const {
    stringify
} = require('../../dist')

exports.native = items => JSON.stringify(items);

exports.utils = items => stringify(items);
