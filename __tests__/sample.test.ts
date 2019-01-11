import "jest-extended";
import { sample } from "../src";

const dummies = ["John", "Jane"];

test("picks a random item", () => {
    expect(dummies).toContain(sample(dummies));
});
