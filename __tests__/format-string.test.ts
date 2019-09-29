import "jest-extended";

import { formatString } from "../src";

describe("#formatString", () => {
    it("should format the string with an explicit positional index", () => {
        expect(formatString("{0} World", "Hello")).toBe("Hello World");
    });
});
