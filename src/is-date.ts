import { getType } from "./get-type";

export const isDate = (value: unknown): boolean => getType(value) === "[object Date]";
