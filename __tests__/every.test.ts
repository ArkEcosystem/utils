import "jest-extended";

import { every, isBoolean } from "../src";

describe("#every", () => {
    it("should work with a functions", () => {
        expect(every([true, false], isBoolean)).toBeTrue();
        expect(every([true, false, "yes"], isBoolean)).toBeFalse();
    });
});
