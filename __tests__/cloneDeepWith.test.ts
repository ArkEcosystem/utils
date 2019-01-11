import "jest-extended";
import { cloneDeepWith } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

test("clones an array", () => {
    const actual = cloneDeepWith(dummies, value => value.age);

    expect(actual).toEqual(dummies.map(p => p.age));
});
