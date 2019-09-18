import noCase from "no-case";

export const snakeCase = (value: string): string => noCase(value).replace(" ", "_");
