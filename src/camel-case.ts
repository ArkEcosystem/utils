import { camelize } from "fast-case";
import { lowerCase } from "./lower-case";

export const camelCase = (value: string): string => camelize(lowerCase(value));
