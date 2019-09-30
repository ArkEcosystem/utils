import "jest-extended";

import { mapArray } from "../src";

describe("#mapArray", () => {
    it("should work like lodash", () => {
        expect(mapArray([4, 8], n => n * n)).toEqual([16, 64]);
    });
});
