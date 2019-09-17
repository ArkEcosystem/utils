import { filter } from "./filter";
import { isFunction } from "./is-function";

export const reject = (collection, predicate) => {
    const func = isFunction(predicate) ? predicate : item => item[predicate];

    return filter(collection, item => !func(item));
};
