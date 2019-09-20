import { Iteratee } from "./internal";
import { isString } from "./is-string";

export const partition = <T>(iterable: T[], iteratee: Iteratee): [T[], T[]] => {
    const func = isString(iteratee) ? item => item[iteratee] : iteratee;

    return iterable.reduce((result, value) => (result[func(value) ? 0 : 1].push(value), result), [[], []]);
};
