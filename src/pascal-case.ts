import { compoundWords } from "./internal";
import { upperFirst } from "./upper-first";

export const pascalCase = (value: string): string =>
    compoundWords(value, (result: string, word: string) => result + upperFirst(word));
