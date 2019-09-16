import { capitalize } from "../src";

const dummies = {
    test: "Test",
    "test space": "Test space",
};

describe("#capitalize", () => {
    it("should capitalize the given input", () => {
        Object.keys(dummies).forEach(key => {
            expect(capitalize(key)).toEqual(dummies[key]);
        });
    });
});
