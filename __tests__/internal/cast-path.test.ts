import { castPath } from "../../src/internal";

describe("#castPath", () => {
    it("should return an array as is", () => {
        expect(castPath(["a", "b"])).toEqual(["a", "b"]);
    });

    it("should return the path as array", () => {
        expect(castPath("a.b")).toEqual(["a", "b"]);
    });
});
