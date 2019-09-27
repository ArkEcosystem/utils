import "jest-extended";

import { isRegExp } from "../src";

describe("#isRegExp", () => {
    it("should pass", () => {
        expect(isRegExp(/a/)).toBeTrue();
    });

    it("should fail", () => {
        expect(isRegExp([])).toBeFalse();
    });
});
