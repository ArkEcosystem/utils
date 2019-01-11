import { orderBy } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

test("sorts records by youngest age", () => {
    const actual = orderBy(dummies, ["name", "age"], ["asc", "asc"]);

    expect(actual).toEqual(dummies);
});

test("sorts records by oldest age", () => {
    const actual = orderBy(dummies, ["name", "age"], ["asc", "desc"]);

    expect(actual).toEqual(dummies.reverse());
});
