import { uniq } from "../src";

test("removes duplicate entries from an array of strings", () => {
    expect(uniq(["Hello", "Hello"])).toEqual(["Hello"]);
});

test("removes duplicate entries from an array of numbers", () => {
    expect(uniq([1, 1])).toEqual([1]);
});
