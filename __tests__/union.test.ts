import "jest-extended";

import { union } from "../src";

describe("#union", () => {
    it("should work with any value", () => {
        expect(union([2], [1, 2])).toEqual([2, 1]);
    });
});
