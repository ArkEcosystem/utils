const utils = require('../dist')
const lodash = require('lodash/keys')

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

exports['utils'] = () => utils.keys(new Foo);

exports['lodash'] = () => lodash(new Foo);
