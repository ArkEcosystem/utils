import { compoundWords } from "./internal";

export const constantCase = (value: string): string =>
    compoundWords(
        value,
        (result: string, word: string, index: number) => result + (index ? "_" : "") + word.toUpperCase(),
    );
