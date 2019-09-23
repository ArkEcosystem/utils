import { filter } from "./filter";
import { Iteratee } from "./internal";
import { isString } from "./is-string";

export const reject = <T>(iterable: T[], iteratee: Iteratee): T[] => {
    const func = isString(iteratee) ? (item): T => item[iteratee] : iteratee;

    return filter(iterable, item => !func(item));
};
