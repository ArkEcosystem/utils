import { isFunction } from "./is-function";
import { map } from "./map";

export const minBy = (collection, iteratee) => {
    const func = isFunction(iteratee) ? iteratee : item => item[iteratee];

    const min = Math.min(...map(collection, func));

    return collection.find(item => func(item) === min);
};
