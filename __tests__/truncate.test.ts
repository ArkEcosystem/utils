import "jest-extended";

import { truncate } from "../src";

describe("#truncate", () => {
    it("should truncate strings if they are above the specified length", () => {
        expect(truncate("Hello World")).toBe("Hello World");

        expect(
            truncate("Hello World", {
                length: 5,
            }),
        ).toBe("Hello...");

        expect(
            truncate("Hello World", {
                length: 5,
                omission: " [...]",
            }),
        ).toBe("Hello [...]");
    });
});
