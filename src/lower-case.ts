import { compoundWords } from "./internal";

export const lowerCase = (value: string): string =>
    compoundWords(
        value,
        (result: string, word: string, index: number) => result + (index ? " " : "") + word.toLowerCase(),
    );
