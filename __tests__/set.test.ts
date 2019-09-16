import "jest-extended";

import { set } from "../src";

describe("#set", () => {
    it("should work like lodash", () => {
        const object = { a: [{ b: { c: 3 } }] };

        set(object, "a[0].b.c", 4);

        expect(object.a[0].b.c).toBe(4);

        set(object, ["x", "0", "y", "z"], 5);

        // @ts-ignore
        expect(object.x[0].y.z).toBe(5);
    });
});
