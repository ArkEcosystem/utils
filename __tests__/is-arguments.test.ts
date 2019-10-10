import "jest-extended";

import { isArguments } from "../src";

describe("#isArguments", () => {
    it("should pass", () => {
        // @ts-ignore
        expect(isArguments(arguments)).toBeTrue();
    });

    it("should fail", () => {
        expect(isArguments(1)).toBeFalse();
    });
});
