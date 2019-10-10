import { getType } from "./get-type";

export const isUndefined = (value: unknown): value is undefined => getType(value) === "[object Undefined]";
