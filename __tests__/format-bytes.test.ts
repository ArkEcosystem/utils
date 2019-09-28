import { formatBytes } from "../src";

describe("#formatBytes", () => {
    it("should format the given number", () => {
        expect(formatBytes(0)).toBe("0 B");
        expect(formatBytes(0.4)).toBe("0.4 B");
        expect(formatBytes(0.7)).toBe("0.7 B");
        expect(formatBytes(10)).toBe("10 B");
        expect(formatBytes(10.1)).toBe("10.1 B");
        expect(formatBytes(999)).toBe("999 B");
        expect(formatBytes(1001)).toBe("1 kB");
        expect(formatBytes(1001)).toBe("1 kB");
        expect(formatBytes(1e16)).toBe("10 PB");
        expect(formatBytes(1e30)).toBe("1,000,000 YB");
    });
});
