import "jest-extended";

import { trimTrailingSlash } from "../src";

describe("#trimTrailingSlash", () => {
    it("should remove all trailing slashes", () => {
        expect(trimTrailingSlash("/owner/path")).toBe("/owner/path");
        expect(trimTrailingSlash("/owner/path/")).toBe("/owner/path");
        expect(trimTrailingSlash("/owner/path//")).toBe("/owner/path");
        expect(trimTrailingSlash("/owner/path//")).toBe("/owner/path");
        expect(trimTrailingSlash("/owner/path///")).toBe("/owner/path");
    });
});
