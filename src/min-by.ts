import { isFunction } from "./is-function";

export const minBy = (collection, iteratee) => {
    const func = isFunction(iteratee) ? iteratee : item => item[iteratee];

    const min = Math.min(...collection.map(func));

    return collection.find(item => func(item) === min);
};
