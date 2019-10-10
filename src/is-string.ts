import { getType } from "./get-type";

export const isString = (value: unknown): value is string => getType(value) === "[object String]";
