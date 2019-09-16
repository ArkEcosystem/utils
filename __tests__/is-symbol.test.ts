import "jest-extended";

import { isSymbol } from "../src";

describe("#isSymbol", () => {
    it("should pass", () => {
        expect(isSymbol(Symbol.for("string"))).toBeTrue();
    });

    it("should fail", () => {
        expect(isSymbol("string")).toBeFalse();
    });
});
