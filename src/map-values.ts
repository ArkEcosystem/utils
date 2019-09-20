import { Iteratee } from "./internal";
import { isString } from "./is-string";
import { map } from "./map";

export const mapValues = <T>(iterable: T[], iteratee: Iteratee): T[] => {
    const func = isString(iteratee) ? item => item[iteratee] : iteratee;

    return map(iterable, func);
};
