import "jest-extended";

import { isEmptyObject } from "../src";

describe("#isEmptyObject", () => {
    it("should return true for an empty object", () => {
        expect(isEmptyObject({})).toBeTrue();
    });
});
