import { FunctionReturning } from "./internal";

export const reduceRightObject = <T, V>(iterable: T, iteratee: FunctionReturning, initialValue: V): T => {
    const keys = Object.keys(iterable);
    const length: number = keys.length;
    let i;
    let result;

    if (initialValue === undefined) {
        i = length - 2;
        result = iterable[keys[length - 1]];
    } else {
        i = length - 1;
        result = initialValue;
    }

    for (; i >= 0; i--) {
        const key = keys[i];

        result = iteratee(result, iterable[key], key, iterable);
    }

    return result;
};
