import "jest-extended";

import { random } from "../src";

describe("#random", () => {
    it("should return a random number within the given range", () => {
        const actual: number = random(1, 5);

        expect(actual).toBeGreaterThanOrEqual(1);
        expect(actual).toBeLessThanOrEqual(5);
    });
});
