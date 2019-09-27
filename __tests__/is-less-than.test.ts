import "jest-extended";

import { isLessThan } from "../src";

describe("#isLessThan", () => {
    it("should pass", () => {
        expect(isLessThan(5, 10)).toBeTrue();
    });

    it("should fail", () => {
        expect(isLessThan(10, 5)).toBeFalse();
    });
});
