import "jest-extended";

import { isFunction } from "../src";

describe("#isFunction", () => {
    it("should pass", () => {
        expect(isFunction(new Function())).toBeTrue();
    });

    it("should fail", () => {
        expect(isFunction([])).toBeFalse();
    });
});
