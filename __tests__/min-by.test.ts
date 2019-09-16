import "jest-extended";

import { minBy } from "../src";

describe("#minBy", () => {
    it("should work with a function", () => {
        expect(minBy([{ n: 1 }, { n: 2 }], o => o.n)).toEqual({ n: 1 });
    });

    it("should with a property", () => {
        expect(minBy([{ n: 1 }, { n: 2 }], "n")).toEqual({ n: 1 });
    });
});
