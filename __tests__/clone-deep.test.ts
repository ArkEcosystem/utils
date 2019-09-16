import "jest-extended";

import { cloneDeep } from "../src";

describe("#cloneDeep", () => {
    it("should work like lodash", () => {
        const object = Object.create({ a: 1 });

        expect(cloneDeep(object, { proto: false })).toEqual({});
        expect(cloneDeep(object, { proto: true })).toEqual({ a: 1 });
    });
});
