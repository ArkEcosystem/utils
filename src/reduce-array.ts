import { FunctionReturning } from "./internal";

export const reduceArray = <T, V>(iterable: T[], iteratee: FunctionReturning, initialValue: V): T => {
    let i;
    let result;

    if (initialValue === undefined) {
        i = 1;
        result = iterable[0];
    } else {
        i = 0;
        result = initialValue;
    }

    for (; i < iterable.length; i++) {
        result = iteratee(result, iterable[i], i, iterable);
    }

    return result;
};
