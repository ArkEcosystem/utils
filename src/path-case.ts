import { compoundWords } from "./internal";

export const pathCase = (value: string): string =>
    compoundWords(value, (result: string, word: string, index: number) => result + (index ? "/" : "") + word);
