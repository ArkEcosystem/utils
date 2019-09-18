import { camelize } from "fast-case";
import noCase from "no-case";

export const camelCase = (value: string): string => camelize(noCase(value));
