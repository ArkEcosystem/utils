import { stringify } from "./stringify";

export const isEqual = (actual: unknown, expected: unknown): boolean => stringify(actual) === stringify(expected);
