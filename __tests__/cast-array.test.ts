import "jest-extended";

import { castArray } from "../src";

describe("#castArray", () => {
    it("should work with any value", () => {
        expect(castArray(1)).toEqual([1]);
        expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
        expect(castArray("abc")).toEqual(["abc"]);
        expect(castArray(null)).toEqual([null]);
        expect(castArray(undefined)).toEqual([undefined]);
    });
});
