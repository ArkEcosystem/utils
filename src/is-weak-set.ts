import { getType } from "./get-type";

export const isWeakSet = (value: unknown): boolean => getType(value) === "[object WeakSet]";
