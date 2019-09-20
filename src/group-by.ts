import { Iteratee } from "./internal";
import { isString } from "./is-string";

export const groupBy = <T>(iterable: T[], iteratee: Iteratee): object => {
    const func = isString(iteratee) ? item => item[iteratee] : iteratee;

    const groupedValues: object = {};

    for (const value of iterable) {
        const keyValue = func(value);

        if (!groupedValues[keyValue]) {
            groupedValues[keyValue] = [];
        }

        groupedValues[keyValue].push(value);
    }

    return groupedValues;
};
