import { filter } from "./filter";
import { Iteratee } from "./internal";
import { isString } from "./is-string";

export const pullAllBy = <T>(iterable: T[], values: T[], iteratee: Iteratee): T[] => {
    const iterateeValues = {};

    return filter(iterable, iterableItem => {
        const func = isString(iteratee) ? (item): T => item[iteratee] : iteratee;

        const itemValue = func(iterableItem);

        if (!iterateeValues[itemValue]) {
            iterateeValues[itemValue] = values.map(value => func(value));
        }

        return !iterateeValues[itemValue].includes(itemValue);
    });
};
