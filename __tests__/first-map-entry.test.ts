import "jest-extended";

import { firstMapEntry } from "../src";

describe("#firstMapEntry", () => {
    it("should return the first entry", () => {
        expect(firstMapEntry(new Map([["Hello", "World"]]))).toEqual(["Hello", "World"]);
    });
});
