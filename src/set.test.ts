import "jest-extended";

import { set } from "./set";

describe("#set", () => {
    it("should not do anything if the target is not an object", () => {
        expect(set(undefined, "a.b.c", 4)).toBeFalse();
    });

    it("should work with a string or array as path", () => {
        const object = { a: { b: { c: 3 } } };

        set(object, "a.b.c", 4);

        expect(object.a.b.c).toBe(4);

        set(object, "x.y.z", 5);

        // @ts-ignore
        expect(object.x.y.z).toBe(5);
    });
});
