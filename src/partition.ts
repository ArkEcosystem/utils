import { isFunction } from "./is-function";

export const partition = (collection, predicate) => {
    const func = isFunction(predicate) ? predicate : item => item[predicate];

    return collection.reduce((result, value) => (result[func(value) ? 0 : 1].push(value), result), [[], []]);
};
