import "jest-extended";
import { uniq } from "../src";

describe("#uniq", () => {
    it("should remove duplicate items", () => {
        expect(uniq([2, 1, 2])).toEqual([2, 1]);
    });
});
