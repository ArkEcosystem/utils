import { uncapitalize } from "../src";

const dummies = {
    Test: "test",
    "Test Space": "test Space",
};

describe("#uncapitalize", () => {
    it("should uncapitalize the given input", () => {
        Object.keys(dummies).forEach(key => {
            expect(uncapitalize(key)).toEqual(dummies[key]);
        });
    });
});
