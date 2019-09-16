import "jest-extended";
import { unset } from "../src";

describe("#unset", () => {
    it("should work like lodash", () => {
        const object = { a: [{ b: { c: 7 } }] };

        unset(object, "a[0].b.c");

        expect(object).toEqual({ a: [{ b: {} }] });

        unset(object, ["a", "0", "b", "c"]);

        expect(object).toEqual({ a: [{ b: {} }] });
    });
});
