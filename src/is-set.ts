import { getType } from "./get-type";

export const isSet = (value: unknown): boolean => getType(value) === "[object Set]";
