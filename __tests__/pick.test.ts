import "jest-extended";
import { pick } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

test("picks the specified column", () => {
    const actual = pick(dummies, "age");

    expect(actual).toEqual(dummies.map(p => p.age));
});
