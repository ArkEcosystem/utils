import { pascalize } from "fast-case";
import { lowerCase } from "./lower-case";

export const pascalCase = (value: string): string => pascalize(lowerCase(value));
