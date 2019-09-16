import "jest-extended";

import { at } from "../src";

describe("#at", () => {
    it("should work like lodash", () => {
        const object = { a: [{ b: { c: 3 } }, 4] };

        expect(at(object, ["a[0].b.c", "a[1]"])).toEqual([3, 4]);
    });
});
