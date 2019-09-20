import { filter } from "./filter";
import { Iteratee } from "./internal";
import { isString } from "./is-string";

export const findKey = <T>(iterable: T, iteratee: Iteratee): string => {
    const func = isString(iteratee) ? item => item[iteratee] : iteratee;

    return Object.keys(filter(iterable, func))[0];
};
