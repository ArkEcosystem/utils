import "jest-extended";
import { sumBy } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

test("sums up by the specified column", () => {
    const actual = sumBy(dummies, "age");

    expect(actual).toBe(106);
});
