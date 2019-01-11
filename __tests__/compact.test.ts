import { compact } from "../src";

const dummies = ["John", null, false, ""];

test("filters out empty values", () => {
    expect(compact(dummies)).toEqual(["John"]);
});
