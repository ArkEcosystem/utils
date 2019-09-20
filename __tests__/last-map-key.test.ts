import "jest-extended";

import { lastMapKey } from "../src";

describe("#lastMapKey", () => {
    it("should return the last key", () => {
        expect(lastMapKey(new Map([["Hello", "World"], ["Another", "Planet"]]))).toBe("Another");
    });
});
