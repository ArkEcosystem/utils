import "jest-extended";

import { min } from "../src";

describe("#min", () => {
    it("should return the smallest number", () => {
        expect(min([1, 2, 3, 4, 5])).toBe(1);
    });
});
