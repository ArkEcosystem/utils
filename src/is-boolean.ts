import { getType } from "./get-type";

export const isBoolean = (value: unknown): value is boolean => getType(value) === "[object Boolean]";
