import "jest-extended";

import { pascalCase } from "../src";

describe("#pascalCase", () => {
    it("should turn any string into pascal case", () => {
        expect(pascalCase("string")).toBe("String");
        expect(pascalCase("camelCase")).toBe("CamelCase");
        expect(pascalCase("param-case")).toBe("ParamCase");
        expect(pascalCase("PascalCase")).toBe("PascalCase");
        expect(pascalCase("pascal_case")).toBe("PascalCase");
        expect(pascalCase("sentence case")).toBe("SentenceCase");
        expect(pascalCase("Title Case")).toBe("TitleCase");
    });
});
