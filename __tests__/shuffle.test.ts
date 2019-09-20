import "jest-extended";

import { shuffle } from "../src";

describe("#shuffle", () => {
    it("should return a new array with items in random order", () => {
        const possibleValues: number[] = Array.from(Array(100).keys());

        const shuffledValues: number[] = shuffle(possibleValues);

        expect(shuffledValues).toIncludeAllMembers(possibleValues);
        expect(shuffledValues).not.toEqual(possibleValues);
    });
});
