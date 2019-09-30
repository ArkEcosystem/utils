import "jest-extended";

import { cloneObject } from "../src";

describe("#cloneObject", () => {
    it("should work like lodash", () => {
        const objects = { a: 1 };

        expect(cloneObject(objects)).toEqual(objects);
    });
});
