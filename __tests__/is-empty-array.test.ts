import "jest-extended";

import { isEmptyArray } from "../src";

describe("#isEmptyArray", () => {
    it("should return true for an empty array", () => {
        expect(isEmptyArray([])).toBeTrue();
    });
});
