import { isFunction } from "./is-function";

export const groupBy = <T>(collection: T[], iteratee): object => {
    const func = isFunction(iteratee) ? iteratee : item => item[iteratee];

    const groupedValues: object = {};

    for (const value of collection) {
        const keyValue = func(value);

        if (!groupedValues[keyValue]) {
            groupedValues[keyValue] = [];
        }

        groupedValues[keyValue].push(value);
    }

    return groupedValues;
};
