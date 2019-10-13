import "jest-extended";

import { isURL } from "../src";

describe("#isURL", () => {
    it("should pass", () => {
        expect(isURL(new URL("https://google.com"))).toBeTrue();
    });

    it("should fail", () => {
        expect(isURL(1)).toBeFalse();
    });
});
