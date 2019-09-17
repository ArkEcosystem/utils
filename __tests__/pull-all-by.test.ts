import "jest-extended";

import { pullAllBy } from "../src";

describe("#pullAllBy", () => {
    it("should work with a function", () => {
        expect(pullAllBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }], [{ x: 1 }, { x: 3 }], o => o.x)).toEqual([{ x: 2 }]);
    });

    it("should work with a property", () => {
        expect(pullAllBy([{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }], [{ x: 1 }, { x: 3 }], "x")).toEqual([{ x: 2 }]);
    });
});
