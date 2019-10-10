import { getType } from "./get-type";

export const isArray = (value: unknown): value is any[] => getType(value) === "[object Array]";
