class Block {
    constructor() {
        this.blockSignature = "3045022100ec0ab2d915ff93f7af49a52c463d915758ca06d447cf9adab4cec1131065971702203c5702fbebc185f369c43219c15175ed4866bf0d4308e41598c58851246a597d"
        this.generatorPublicKey = "036a520acf24036ff691a4f8ba19514828e9b5aa36ca4ba0452e9012023caccfef"
        this.height = 1201204
        this.id = "2653480465582386466"
        this.idHex = "24d30e6cb979ed22"
        this.numberOfTransactions = 0
        this.payloadHash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
        this.payloadLength = 0
        this.previousBlock = "14512262220230802923"
        this.previousBlockHex = "c965e9999c2dbdeb"
        this.reward = 200000000
        this.timestamp = 57337218
        this.totalAmount = 0
        this.totalFee = 0
        this.transactions = []
        this.version = 0
    }
}

module.exports = new Block()
