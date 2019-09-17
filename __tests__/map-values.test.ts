import "jest-extended";

import { mapValues } from "../src";

describe("#mapValues", () => {
    const users = {
        fred: { user: "fred", age: 40 },
        pebbles: { user: "pebbles", age: 1 },
    };

    it("should work with a function", () => {
        expect(mapValues(users, o => o.age)).toEqual({ fred: 40, pebbles: 1 });
    });

    it("should work with a property", () => {
        expect(mapValues(users, "age")).toEqual({ fred: 40, pebbles: 1 });
    });
});
