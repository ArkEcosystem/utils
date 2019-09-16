import { sortByDesc } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

describe("#sortByDesc", () => {
    it("should sort records without iteratees", () => {
        expect(sortByDesc(dummies)).toEqual(dummies);
    });

    it("should sort records by string", () => {
        expect(sortByDesc(dummies, "age")).toEqual(dummies.reverse());
    });

    it("should sort records by array", () => {
        expect(sortByDesc(dummies, ["age"])).toEqual(dummies.reverse());
    });
});
