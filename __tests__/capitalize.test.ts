import { capitalize } from "../src";

const dummies = {
    test: "Test",
    "test space": "Test space",
};

test("capitalizes input", () => {
    Object.keys(dummies).forEach(key => {
        expect(capitalize(key)).toEqual(dummies[key]);
    });
});
