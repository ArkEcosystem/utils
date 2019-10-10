import { getType } from "./get-type";

export const isSymbol = (value: unknown): value is symbol => getType(value) === "[object Symbol]";
