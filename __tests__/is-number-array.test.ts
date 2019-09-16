import "jest-extended";

import { isNumberArray } from "../src";

describe("#isNumberArray", () => {
    it("should pass", () => {
        expect(isNumberArray([1])).toBeTrue();
    });

    it("should fail", () => {
        expect(isNumberArray(["string"])).toBeFalse();
    });
});
