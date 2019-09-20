import "jest-extended";

import { firstMapValue } from "../src";

describe("#firstMapValue", () => {
    it("should return the first value", () => {
        expect(firstMapValue(new Map([["Hello", "World"]]))).toBe("World");
    });
});
