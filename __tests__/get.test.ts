import "jest-extended";

import { get } from "../src";

describe("#get", () => {
    it("should work like lodash", () => {
        const object = { a: [{ b: { c: 3 } }] };

        expect(get(object, "a[0].b.c")).toEqual(3);
        expect(get(object, ["a", "0", "b", "c"])).toEqual(3);
        expect(get(object, "a.b.c", "default")).toEqual("default");
    });
});
