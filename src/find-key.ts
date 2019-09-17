import { filter } from "./filter";
import { isFunction } from "./is-function";

export const findKey = (collection, predicate) => {
    const func = isFunction(predicate) ? predicate : item => item[predicate];

    return Object.keys(filter(collection, func))[0];
};
