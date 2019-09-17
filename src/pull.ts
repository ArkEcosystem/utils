import { filter } from "./filter";
import { isFunction } from "./is-function";

export const pull = (collection, predicate) => {
    const func = isFunction(predicate) ? predicate : item => !predicate.includes(item);

    return filter(collection, func);
};
