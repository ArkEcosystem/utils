import "jest-extended";

import { isEmptyMap } from "../src";

describe("#isEmptyMap", () => {
    it("should return true for an empty map", () => {
        expect(isEmptyMap(new Map())).toBeTrue();
    });
});
