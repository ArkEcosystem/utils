import "jest-extended";

import { isPromise } from "../src";

describe("#isPromise", () => {
    it("should pass", () => {
        expect(isPromise(new Promise(() => {}))).toBeTrue();
    });

    it("should fail", () => {
        expect(isPromise(1)).toBeFalse();
    });
});
