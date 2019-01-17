const { models: { Block } } = require("@arkecosystem/crypto");

const block = new Block();
block.blockSignature = "3045022100ec0ab2d915ff93f7af49a52c463d915758ca06d447cf9adab4cec1131065971702203c5702fbebc185f369c43219c15175ed4866bf0d4308e41598c58851246a597d"
block.generatorPublicKey = "036a520acf24036ff691a4f8ba19514828e9b5aa36ca4ba0452e9012023caccfef"
block.height = 1201204
block.id = "2653480465582386466"
block.idHex = "24d30e6cb979ed22"
block.numberOfTransactions = 0
block.payloadHash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
block.payloadLength = 0
block.previousBlock = "14512262220230802923"
block.previousBlockHex = "c965e9999c2dbdeb"
block.reward = 200000000
block.timestamp = 57337218
block.totalAmount = 0
block.totalFee = 0
block.transactions = []
block.version = 0

module.exports = block
