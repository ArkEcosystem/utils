import { lowerCase } from "./lower-case";

export const snakeCase = (value: string): string => lowerCase(value).replace(" ", "_");
