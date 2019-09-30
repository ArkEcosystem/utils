import { FunctionReturning } from "./internal";

export const reduceRightObject = <T, V>(iterable: T, iteratee: FunctionReturning, initialValue?: V): V => {
    const keys: string[] = Object.keys(iterable);

    let result: V = initialValue;

    for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];

        result = iteratee(result, iterable[key], key, iterable);
    }

    return result;
};
