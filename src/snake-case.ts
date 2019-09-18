export const snakeCase = (value: string): string =>
    value
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
        .replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
        .replace(/[^A-Za-z0-9]+|_+/g, "_")
        .toLowerCase();
