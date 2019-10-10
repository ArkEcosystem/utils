import { getType } from "./get-type";

export const isNumber = (value: unknown): value is number => getType(value) === "[object Number]";
