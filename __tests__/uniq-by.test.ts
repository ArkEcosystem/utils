import "jest-extended";
import { uniqBy } from "../src";

describe("#uniqBy", () => {
    it("should work with a function", () => {
        expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
    });

    it("should work with a property", () => {
        expect(uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x")).toEqual([{ x: 1 }, { x: 2 }]);
    });
});
