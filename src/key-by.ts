import { isFunction } from "./is-function";

export const keyBy = (collection, iteratee) => {
    const func = isFunction(iteratee) ? iteratee : item => item[iteratee];

    return collection.reduce((result, value, key) => {
        result[func(value)] = value;

        return result;
    }, {});
};
