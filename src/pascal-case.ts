import { pascalize } from "fast-case";
import noCase from "no-case";

export const pascalCase = (value: string): string => pascalize(noCase(value));
