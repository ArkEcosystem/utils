import "jest-extended";

import { indexOf } from "./index-of";

describe("#indexOf", () => {
    it("should return the expected index", () => {
        expect(indexOf([1, 2, 1, 2], 2)).toBe(1);
        expect(indexOf([1, 2, 1, 2], 2, 3)).toBe(3);
        expect(indexOf([1, 2, 1, 2], 2, 2)).toBe(3);
        expect(indexOf([1, 2, 1, 2], 3)).toBe(-1);
        expect(indexOf([], 0, -1)).toBe(-1);
    });
});
