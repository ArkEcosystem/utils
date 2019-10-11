import "jest-extended";

import { isNegative } from "../src";

describe("#isNegative", () => {
    it("should pass", () => {
        expect(isNegative(-1)).toBeTrue();
    });

    it("should fail", () => {
        expect(isNegative(1)).toBeFalse();
    });
});
