import "jest-extended";

import { isMatch } from "../src";

describe("#isMatch", () => {
    it("should pass", () => {
        expect(isMatch("a", /a/)).toBeTrue();
    });

    it("should fail", () => {
        expect(isMatch(1, /a/)).toBeFalse();
    });
});
