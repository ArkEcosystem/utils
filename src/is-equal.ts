import { stringify } from "./stringify";

export const isEqual = (actual: unknown, expected: unknown): boolean => {
    if (actual === expected) {
        return true;
    }

    if (actual == null || expected == null) {
        return actual !== actual && expected !== expected;
    }

    return stringify(actual) === stringify(expected);
};
