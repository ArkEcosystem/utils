import { getType } from "./get-type";

export const isRegExp = (value: unknown): value is RegExp => getType(value) === "[object RegExp]";
