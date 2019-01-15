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

test("sums up using the specified function", () => {
    const actual = sumBy(dummies, (value: { name: string; age: number }) => value.age);

    expect(actual).toBe(106);
});
