import { uncapitalize } from "../src";

const dummies = {
    Test: "test",
    "Test Space": "test Space",
};

test("uncapitalizes input", () => {
    Object.keys(dummies).forEach(key => {
        expect(uncapitalize(key)).toEqual(dummies[key]);
    });
});
