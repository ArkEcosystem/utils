import { reduce } from "../reduce";
import { removeCase } from "./remove-case";

export const compoundWords = (
    words: string,
    transformer: (result: string, word: string, index: number) => string,
): string => reduce(removeCase(words).split(" "), transformer, "");
