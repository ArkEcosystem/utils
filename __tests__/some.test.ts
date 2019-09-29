import "jest-extended";

import { some } from "../src";

describe("#some", () => {
    it("should work with any function", () => {
        expect(some([null, 0, "yes", false], Boolean)).toBeTrue();

        expect(
            some(
                [{ user: "barney", active: true }, { user: "fred", active: false }],
                currentValue => currentValue.active,
            ),
        ).toBeTrue();
    });
});
