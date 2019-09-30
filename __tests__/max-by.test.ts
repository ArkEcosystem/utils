import "jest-extended";

import { maxBy } from "../src";

describe("#maxBy", () => {
    it("should work with a function", () => {
        expect(maxBy([{ n: 1 }, { n: 2 }], o => o.n)).toEqual({ n: 2 });
    });
});
