import { stringify } from "./stringify";

export const isEqual = (actual: unknown, expected: unknown): boolean => {
    if (actual === expected) {
        return true;
    }

    return stringify(actual) === stringify(expected);
};
