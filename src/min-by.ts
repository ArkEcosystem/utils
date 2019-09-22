import { Iteratee } from "./internal";
import { isString } from "./is-string";
import { map } from "./map";
import { min } from "./min";

export const minBy = <T>(iterable: T[], iteratee: Iteratee): T => {
    const func = isString(iteratee) ? item => item[iteratee] : iteratee;

    const minValue: number = min(map(iterable, func));

    return iterable.find(item => func(item) === minValue);
};
