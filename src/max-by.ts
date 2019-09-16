import { isFunction } from "./is-function";
import { map } from "./map";

export const maxBy = (collection, iteratee): number => {
    const func = isFunction(iteratee) ? iteratee : item => item[iteratee];

    const max = Math.max(...map(collection, func));

    return collection.find(item => func(item) === max);
};
