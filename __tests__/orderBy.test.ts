import { orderBy } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

test("sorts records by youngest age (with string params)", () => {
    const actual = orderBy(dummies, "age", "asc");

    expect(actual).toEqual(dummies);
});

test("sorts records by youngest age (with function params)", () => {
    const actual = orderBy(dummies, value => value.age, "asc");

    expect(actual).toEqual(dummies);
});

test("sorts records by oldest age (with string params)", () => {
    const actual = orderBy(dummies, "age", "desc");

    expect(actual).toEqual(dummies.reverse());
});

test("sorts records by oldest age (with function params)", () => {
    const actual = orderBy(dummies, value => value.age, "desc");

    expect(actual).toEqual(dummies.reverse());
});

test("sorts records by youngest age (with array params)", () => {
    const actual = orderBy(dummies, ["name", "age"], ["asc", "asc"]);

    expect(actual).toEqual(dummies);
});

test("sorts records by oldest age (with array params)", () => {
    const actual = orderBy(dummies, ["name", "age"], ["asc", "desc"]);

    expect(actual).toEqual(dummies.reverse());
});
