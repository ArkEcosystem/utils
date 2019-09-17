import "jest-extended";

import { clone } from "../src";

describe("#clone", () => {
    it("should work like lodash", () => {
        const objects = [{ a: 1 }, { b: 2 }];

        expect(clone(objects)).toEqual(objects);
    });
});
