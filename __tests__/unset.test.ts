import "jest-extended";
import { unset } from "../src";

describe("#unset", () => {
    it("should not do anything if the object is not an object", () => {
        expect(unset([], "a.b.c")).toBeFalse();
    });

    it("should work with a string or array as path", () => {
        const object = { a: { b: { c: 7 } } };

        unset(object, "a.b.c");

        expect(object).toEqual({ a: { b: {} } });

        unset(object, "a.b.c");

        expect(object).toEqual({ a: { b: {} } });
    });
});
