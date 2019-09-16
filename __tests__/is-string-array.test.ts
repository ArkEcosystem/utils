import "jest-extended";

import { isStringArray } from "../src";

describe("#isStringArray", () => {
    it("should pass", () => {
        expect(isStringArray(["string"])).toBeTrue();
    });

    it("should fail", () => {
        expect(isStringArray([1])).toBeFalse();
    });
});
