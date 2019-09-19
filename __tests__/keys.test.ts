import "jest-extended";

import { keys } from "../src";

describe("#keys", () => {
    it("should work with an object", () => {
        function Foo() {
            this.a = 1;
            this.b = 2;
        }

        Foo.prototype.c = 3;

        expect(keys(new Foo())).toEqual(["a", "b"]);
    });

    it("should work with a string", () => {
        expect(keys("hi")).toEqual(["0", "1"]);
    });

    it("should work with an array", () => {
        expect(keys([1, 2, 3, 4])).toEqual(["0", "1", "2", "3"]);
    });
});