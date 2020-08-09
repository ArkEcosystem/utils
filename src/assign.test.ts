import "jest-extended";

import { assign } from "./assign";

function Foo() {
    // @ts-ignore
    this.a = 1;
}

function Bar() {
    // @ts-ignore
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

describe("#assign", () => {
    it("should return the names of the users", () => {
        expect(assign({ a: 0 }, new Foo(), new Bar())).toEqual({ a: 1, c: 3 });
    });
});
