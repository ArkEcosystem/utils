import "jest-extended";

import { max } from "../src";

describe("#max", () => {
    it("should return the largest number", () => {
        expect(max([1, 2, 3, 4, 5])).toBe(5);
    });
});
