import "jest-extended";

import { getPathSegments } from "../src";

describe("#getPathSegments", () => {
    it("should work with strings an arrays", () => {
        expect(getPathSegments("a.b")).toEqual(["a", "b"]);
        expect(getPathSegments(["a", "b"])).toEqual(["a", "b"]);
    });
});
