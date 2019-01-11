import "jest-extended";
import { randomString } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

test("generates a random string", () => {
    expect(randomString()).toBeString();
});
