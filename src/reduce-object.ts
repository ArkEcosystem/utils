import { FunctionReturning } from "./internal";

export const reduceObject = <T, V>(iterable: T, iteratee: FunctionReturning, initialValue: V): T => {
    const keys: string[] = Object.keys(iterable);
    let i;
    let result;

    if (initialValue === undefined) {
        i = 1;
        result = iterable[keys[0]];
    } else {
        i = 0;
        result = initialValue;
    }

    for (; i < keys.length; i++) {
        const key = keys[i];
        result = iteratee(result, iterable[key], key, iterable);
    }

    return result;
};
