import "jest-extended";

import { isEqual } from "../src";

describe("#isEqual", () => {
    it("should pass with strings", () => {
        expect(isEqual("true", "true")).toBeTrue();
    });

    it("should pass with numbers", () => {
        expect(isEqual(1, 1)).toBeTrue();
    });

    it("should pass with booleans", () => {
        expect(isEqual(true, true)).toBeTrue();
    });

    it("should pass with objects", () => {
        expect(isEqual({}, {})).toBeTrue();
    });

    it("should pass with arrays", () => {
        expect(isEqual([], [])).toBeTrue();
    });
});
