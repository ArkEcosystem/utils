const {
    BigNumber
} = require('../dist')
const BigNum = require('bignumber.js')

exports['native'] = () => BigInt('1111222233334444555566')

exports['utils'] = () => new BigNumber('1111222233334444555566')

exports['bignumber.js'] = () => new BigNum('1111222233334444555566')
