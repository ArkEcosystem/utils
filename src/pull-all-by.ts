import { filter } from "./filter";
import { Iteratee } from "./internal";
import { isString } from "./is-string";

export const pullAllBy = <T>(iterable: T[], values: T[], iteratee: Iteratee): T[] => {
    const predicateValues = {};

    return filter(iterable, iterableItem => {
        const func = isString(iteratee) ? item => item[iteratee] : iteratee;

        const itemValue = func(iterableItem);

        if (!predicateValues[itemValue]) {
            predicateValues[itemValue] = values.map(value => func(value));
        }

        return !predicateValues[itemValue].includes(itemValue);
    });
};
