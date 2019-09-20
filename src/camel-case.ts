import { compoundWords } from "./internal";
import { upperFirst } from "./upper-first";

export const camelCase = (value: string): string =>
    compoundWords(value, (result: string, word: string, index: number) => result + (index ? upperFirst(word) : word));
