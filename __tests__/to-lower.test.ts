import "jest-extended";

import { toLower } from "../src";

describe("#toLower", () => {
    it("should turn everything into lower case", () => {
        expect(toLower("--foo-bar--")).toEqual("--foo-bar--");
        expect(toLower("fooBar")).toEqual("foobar");
        expect(toLower("__foo_bar__")).toEqual("__foo_bar__");
    });
});
