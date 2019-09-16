import "jest-extended";

import { isUndefined } from "../src";

describe("#isUndefined", () => {
    it("should pass", () => {
        expect(isUndefined(undefined)).toBeTrue();
    });

    it("should fail", () => {
        expect(isUndefined("undefined")).toBeFalse();
    });
});
