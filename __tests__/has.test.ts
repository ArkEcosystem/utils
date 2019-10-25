import "jest-extended";

import { has } from "../src";

describe("#has", () => {
    it("should not do anything if the object is not an object", () => {
        expect(has([], "a.b.c")).toBeFalse();
    });

    it("should work like lodash", () => {
        const object = { a: { b: 2 } };

        expect(has(object, "a")).toBeTrue();
        expect(has(object, "a.b")).toBeTrue();
        expect(has(object, ["a", "b"])).toBeTrue();
        expect(has(object, "c")).toBeFalse();
        expect(has({ a: undefined }, "a")).toBeFalse();
    });
});
