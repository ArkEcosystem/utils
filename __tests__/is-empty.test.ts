import "jest-extended";

import { isEmpty } from "../src";

describe("#isEmpty", () => {
    it("should pass", () => {
        expect(isEmpty([])).toBeTrue();
    });

    it("should fail", () => {
        expect(isEmpty([1])).toBeFalse();
    });
});
