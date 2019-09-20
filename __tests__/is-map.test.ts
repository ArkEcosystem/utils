import "jest-extended";

import { isMap } from "../src";

describe("#isMap", () => {
    it("should pass", () => {
        expect(isMap(new Map())).toBeTrue();
    });

    it("should fail", () => {
        expect(isMap(1)).toBeFalse();
    });
});
