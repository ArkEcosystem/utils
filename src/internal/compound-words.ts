import { map } from "../map";
import { reduce } from "../reduce";
import { words } from "../words";

export const compoundWords = (
    value: string,
    transformer: (result: string, word: string, index: number) => string,
): string => reduce(map(words(value), w => w.toLowerCase()), transformer, "");
