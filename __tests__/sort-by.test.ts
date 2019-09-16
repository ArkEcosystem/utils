import { sortBy } from "../src";

const dummies = [
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
];

describe("#sortBy", () => {
    it("should sort records without iteratees", () => {
        expect(sortBy(dummies)).toEqual(dummies);
    });

    it("should sort records by string", () => {
        expect(sortBy(dummies, "age")).toEqual(dummies);
    });

    it("should sort records by array", () => {
        expect(sortBy(dummies, ["age"])).toEqual(dummies);
    });
});
