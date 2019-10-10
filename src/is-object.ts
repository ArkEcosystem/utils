import { getType } from "./get-type";

export const isObject = (value: unknown): value is object => getType(value) === "[object Object]";
