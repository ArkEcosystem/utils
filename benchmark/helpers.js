const utils = require('../dist')
const { randomObject } = require('random-object');

exports.createBlocks = count => new Array(count).fill(require("./fixtures/block"));

exports.createNumbers = count => new Array(count);

exports.createStrings = count => new Array(count).fill(utils.randomString());

exports.createTransactions = count => new Array(count).fill(require("./fixtures/transaction"));

exports.createWallets = count => new Array(count).fill(require("./fixtures/wallet"));

exports.createObjects = (count, width, depth) => new Array(count).fill(randomObject(width, depth));

exports.createObject = (width, depth) => randomObject(width, depth);
