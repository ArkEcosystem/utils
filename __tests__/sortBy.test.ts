import { sortBy } from "../src";

const dummies = [
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
];

test("sorts records without iteratees", () => {
    const actual = sortBy(dummies);

    expect(actual).toEqual(dummies);
});

test("sorts records by string", () => {
    const actual = sortBy(dummies, "age");

    expect(actual).toEqual(dummies);
});

test("sorts records by array", () => {
    const actual = sortBy(dummies, ["age"]);

    expect(actual).toEqual(dummies);
});
