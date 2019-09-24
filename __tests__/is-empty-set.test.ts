import "jest-extended";

import { isEmptySet } from "../src";

describe("#isEmptySet", () => {
    it("should return true for an empty set", () => {
        expect(isEmptySet(new Set())).toBeTrue();
    });
});
