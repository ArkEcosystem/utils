import { Iteratee } from "./internal";
import { isString } from "./is-string";
import { map } from "./map";
import { max } from "./max";

export const maxBy = <T>(iterable: T[], iteratee: Iteratee): T => {
    const func = isString(iteratee) ? item => item[iteratee] : iteratee;

    const maxValue: number = max(map(iterable, func));

    return iterable.find(item => func(item) === maxValue);
};
