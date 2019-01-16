const utils = require('../dist')

exports.createBlocks = count => new Array(count).fill(require("./fixtures/block"));
exports.createNumbers = count => new Array(count);
exports.createStrings = count => new Array(count).fill(utils.randomString());
exports.createTransactions = count => new Array(count).fill(require("./fixtures/transaction"));
exports.createWallets = count => new Array(count).fill(require("./fixtures/wallet"));
