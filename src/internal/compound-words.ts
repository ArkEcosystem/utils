import { mapArray } from "../map-array";
import { reduceArray } from "../reduce-array";
import { words } from "../words";

export const compoundWords = (
    value: string,
    transformer: (result: string, word: string, index: number) => string,
): string => reduceArray<string, string>(mapArray<string, string>(words(value), w => w.toLowerCase()), transformer, "");
