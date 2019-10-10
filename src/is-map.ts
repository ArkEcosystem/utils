import { getType } from "./get-type";

export const isMap = (value: unknown): boolean => getType(value) === "[object Map]";
