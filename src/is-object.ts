import { isNil } from "./is-nil";

export const isObject = (value: unknown): value is object => !isNil(value) && typeof value === "object";
