import { words } from "../src";

describe("#words", () => {
    it("should work with words", () => {
        expect(words("fred, barney, & pebbles")).toEqual(["fred", "barney", "pebbles"]);
    });
});
