import "jest-extended";

import { has } from "../src";

describe("#has", () => {
    it("should work like lodash", () => {
        const object = { a: { b: 2 } };

        expect(has(object, "a")).toBeTrue();
        expect(has(object, "a.b")).toBeTrue();
        expect(has(object, ["a", "b"])).toBeTrue();
        expect(has(object, "c")).toBeFalse();
    });
});
