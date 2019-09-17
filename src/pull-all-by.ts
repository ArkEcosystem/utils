import { filter } from "./filter";
import { isFunction } from "./is-function";

export const pullAllBy = (collection, values, predicate) => {
    const predicateValues = {};

    return filter(collection, collectionItem => {
        const func = isFunction(predicate) ? predicate : item => item[predicate];

        const itemValue = func(collectionItem);

        if (!predicateValues[itemValue]) {
            predicateValues[itemValue] = values.map(value => func(value));
        }

        return !predicateValues[itemValue].includes(itemValue);
    });
};
