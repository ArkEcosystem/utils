import { camelize } from "fast-case";

export const camelCase = (value: string): string => camelize(value);
