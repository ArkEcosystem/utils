import { getType } from "./get-type";

export const isNull = (value: unknown): value is null => getType(value) === "[object Null]";
