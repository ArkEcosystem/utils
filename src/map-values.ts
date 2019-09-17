import { isFunction } from "./is-function";
import { map } from "./map";

export const mapValues = (collection, predicate) => {
    const func = isFunction(predicate) ? predicate : item => item[predicate];

    return map(collection, func);
};
