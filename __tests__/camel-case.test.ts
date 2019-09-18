import "jest-extended";

import { camelCase } from "../src";

describe("#camelCase", () => {
    it("should turn any string into camel case", () => {
        expect(camelCase("string")).toBe("string");
        expect(camelCase("camelCase")).toBe("camelCase");
        expect(camelCase("param-case")).toBe("paramCase");
        expect(camelCase("PascalCase")).toBe("pascalCase");
        expect(camelCase("camel_case")).toBe("camelCase");
        expect(camelCase("sentence case")).toBe("sentenceCase");
        expect(camelCase("Title Case")).toBe("titleCase");
    });
});
