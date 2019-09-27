import "jest-extended";

import { isTrue } from "../src";

describe("#isTrue", () => {
    it("should pass", () => {
        expect(isTrue(true)).toBeTrue();
    });

    it("should fail", () => {
        expect(isTrue(false)).toBeFalse();
    });
});
