import { getType } from "./get-type";

export const isError = (value: unknown): boolean => getType(value) === "[object Error]";
