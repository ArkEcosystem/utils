import { sortByDesc } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

test("sorts records without iteratees", () => {
    const actual = sortByDesc(dummies);

    expect(actual).toEqual(dummies);
});

test("sorts records by string", () => {
    const actual = sortByDesc(dummies, "age");

    expect(actual).toEqual(dummies.reverse());
});

test("sorts records by array", () => {
    const actual = sortByDesc(dummies, ["age"]);

    expect(actual).toEqual(dummies.reverse());
});
