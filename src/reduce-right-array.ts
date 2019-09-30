import { FunctionReturning } from "./internal";

export const reduceRightArray = <T, V>(iterable: T[], iteratee: FunctionReturning, initialValue: V): T => {
    const length: number = iterable.length;
    let i;
    let result;

    if (initialValue === undefined) {
        i = length - 2;
        result = iterable[length - 1];
    } else {
        i = length - 1;
        result = initialValue;
    }

    for (; i >= 0; i--) {
        result = iteratee(result, iterable[i], i, iterable);
    }

    return result;
};
