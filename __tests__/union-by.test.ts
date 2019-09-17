import "jest-extended";

import { unionBy } from "../src";

describe("#unionBy", () => {
    it("should work with a function", () => {
        expect(unionBy([2.1], [1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
    });

    it("should work with a property", () => {
        expect(unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x")).toEqual([{ x: 1 }, { x: 2 }]);
    });
});
