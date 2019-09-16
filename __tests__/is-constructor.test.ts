import "jest-extended";

import { isConstructor } from "../src";

describe("#isConstructor", () => {
    it("should pass", () => {
        expect(isConstructor(Date)).toBeTrue();
    });

    it("should fail", () => {
        expect(isConstructor([])).toBeFalse();
    });
});
