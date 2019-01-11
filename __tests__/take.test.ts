import { take } from "../src";

const dummies = [
    { name: "Andrew", age: 18 },
    { name: "Bob", age: 18 },
    { name: "John", age: 30 },
    { name: "Jane", age: 40 },
];

test("takes the first 2 items", () => {
    expect(take(dummies, 2)).toEqual([{ name: "Andrew", age: 18 }, { name: "Bob", age: 18 }]);
});
