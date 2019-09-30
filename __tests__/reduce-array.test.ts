import "jest-extended";

import { reduceArray } from "../src";

describe("#reduceArray", () => {
    it("should work with a function", () => {
        expect(reduceArray([1, 2], (sum, n) => sum + n, 0)).toBe(3);
    });
});
