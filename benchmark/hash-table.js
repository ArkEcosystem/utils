const {
    HashTable
} = require('../dist')

const keys = []
const values = []
for (let i = 0; i < 100000; i++) {
    keys.push(require('hyperid')())
    values.push(Math.round())
}


exports['native'] = () => {
    const hashTable = []

    for (let i = 0; i < keys.length; i++) {
        hashTable[keys[i]] = values[i]
        hashTable[keys[i]]
    }
}

exports['utils'] = () => {
    const hashTable = new HashTable();

    for (let i = 0; i < keys.length; i++) {
        hashTable.set(keys[i], values[i])
        hashTable.get(keys[i])
    }
}
