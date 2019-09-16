import { transformBrackets } from "../src/internal";

describe("#transformBrackets", () => {
    it("should replace brackets with dots", () => {
        expect(transformBrackets("a[0]")).toEqual("a.0");
    });

    it("should turn an array of strings into a dot-notation string", () => {
        expect(transformBrackets(["a", "[0]"])).toEqual("a.0");
    });

    it("should not modify the value if there are no brackets", () => {
        expect(transformBrackets("a.0")).toEqual("a.0");
    });
});
