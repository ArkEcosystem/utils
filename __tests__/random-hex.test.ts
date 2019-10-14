import "jest-extended";

import { randomHex } from "../src";

describe("#randomHex", () => {
    it("should return a random hex string", () => {
        expect(randomHex(8)).toHaveLength(8);
        expect(randomHex(16)).toHaveLength(16);
        expect(randomHex(32)).toHaveLength(32);
    });
});
