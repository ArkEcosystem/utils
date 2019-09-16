import stringify from "fast-safe-stringify";

export const isEqual = (actual: unknown, expected: unknown): boolean => stringify(actual) === stringify(expected);
