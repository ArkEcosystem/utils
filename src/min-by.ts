import { Iteratee } from "./internal";
import { isString } from "./is-string";
import { map } from "./map";

export const minBy = <T>(iterable: T[], iteratee: Iteratee): T | undefined => {
    if (!iterable || !iterable.length) {
        return undefined;
    }

    const func = isString(iteratee) ? item => item[iteratee] : iteratee;

    const min = Math.min(...map(iterable, func));

    return iterable.find(item => func(item) === min);
};
