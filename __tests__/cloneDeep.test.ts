import "jest-extended";
import { cloneDeep } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

test("clones an array", () => {
    expect(cloneDeep(dummies)).toEqual(dummies);
});

test("clones an object", () => {
    expect(cloneDeep(dummies[0])).toEqual(dummies[0]);
});
