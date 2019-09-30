import "jest-extended";

import { cloneArray } from "../src";

describe("#cloneArray", () => {
    it("should work like lodash", () => {
        const objects = [{ a: 1 }, { b: 2 }];

        expect(cloneArray(objects)).toEqual(objects);
    });
});
