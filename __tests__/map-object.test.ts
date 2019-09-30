import "jest-extended";

import { mapObject } from "../src";

describe("#mapObject", () => {
    it("should work like lodash", () => {
        expect(mapObject({ a: 4, b: 8 }, n => n * n)).toEqual([16, 64]);
    });
});
