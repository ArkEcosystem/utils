import "jest-extended";

import { keysIn } from "../src";

describe("#keysIn", () => {
    it("should work with an object", () => {
        function Foo() {
            this.a = 1;
            this.b = 2;
        }

        Foo.prototype.c = 3;

        expect(keysIn(new Foo())).toIncludeAllMembers(["a", "b", "c"]);
    });
});
