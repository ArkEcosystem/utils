import "jest-extended";

import { isArrayOfType } from "../src";

describe("#isArrayOfType", () => {
    it("should pass", () => {
        expect(isArrayOfType<number>([1], "number")).toBeTrue();
    });

    it("should fail", () => {
        expect(isArrayOfType<number>(["string"], "number")).toBeFalse();
    });
});
