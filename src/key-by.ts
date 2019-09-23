import { Iteratee } from "./internal";
import { isString } from "./is-string";

export const keyBy = <T>(iterable: T[], iteratee: Iteratee): object => {
    const func = isString(iteratee) ? (item): T => item[iteratee] : iteratee;

    return iterable.reduce((result, value) => {
        result[func(value)] = value;

        return result;
    }, {});
};
