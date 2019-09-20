import { lowerCase } from "./lower-case";

export const upperCase = (value: string): string | undefined => lowerCase(value).toUpperCase();
