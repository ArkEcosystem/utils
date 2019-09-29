import { isArray } from "./is-array";

export const reduce = (iterable, iteratee, initialValue) => {
    if (isArray(iterable)) {
        const length = iterable.length;
        let i;
        let result;

        if (initialValue === undefined) {
            i = 1;
            result = iterable[0];
        } else {
            i = 0;
            result = initialValue;
        }

        for (; i < length; i++) {
            result = iteratee(result, iterable[i], i, iterable);
        }

        return result;
    }

    const keys = Object.keys(iterable);
    const length = keys.length;
    let i;
    let result;

    if (initialValue === undefined) {
        i = 1;
        result = iterable[keys[0]];
    } else {
        i = 0;
        result = initialValue;
    }

    for (; i < length; i++) {
        const key = keys[i];
        result = iteratee(result, iterable[key], key, iterable);
    }

    return result;
};
