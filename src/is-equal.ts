import { stringify } from "./stringify";

export const isEqual = (actual: unknown, expected: unknown): boolean =>
    actual === expected || stringify(actual) === stringify(expected);
