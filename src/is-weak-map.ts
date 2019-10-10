import { getType } from "./get-type";

export const isWeakMap = (value: unknown): boolean => getType(value) === "[object WeakMap]";
