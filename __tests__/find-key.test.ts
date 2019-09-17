import "jest-extended";

import { findKey } from "../src";

describe("#findKey", () => {
    const users = {
        barney: { age: 36, active: true },
        fred: { age: 40, active: false },
        pebbles: { age: 1, active: true },
    };

    it("should work with a function", () => {
        expect(findKey(users, o => o.age < 40)).toBe("barney");
    });

    it("should work with a property", () => {
        expect(findKey(users, "active")).toBe("barney");
    });
});
