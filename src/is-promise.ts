import { getType } from "./get-type";

export const isPromise = (value: unknown): boolean => getType(value) === "[object Promise]";
