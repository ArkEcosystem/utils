import "jest-extended";

import { get } from "../src";

describe("#get", () => {
    it("should not do anything if the object is not an object", () => {
        expect(get([], "a.b.c")).toBeUndefined();
    });

    it("should work with nested objects", () => {
        const object = { a: { b: { c: 3 } } };

        expect(get(object, "a.b.c")).toEqual(3);
        expect(get(object, ["a", "b", "c"])).toEqual(3);
        expect(get(object, "a.b.c.d", "default")).toEqual("default");
    });
});
