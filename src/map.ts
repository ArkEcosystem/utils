import { FunctionReturning } from "./internal";
import { isArray } from "./is-array";

export const map = (iterable: any[], iteratee: FunctionReturning): any => {
    if (isArray(iterable)) {
        const iterableLength: number = iterable.length;
        const result: any[] = new Array(iterableLength);

        for (let i = 0; i < iterableLength; i++) {
            result[i] = iteratee(iterable[i], i, iterable);
        }

        return result;
    }

    const keys: string[] = Object.keys(iterable);
    const result = {};

    for (let i = 0; i < keys.length; i++) {
        const key: string = keys[i];

        result[key] = iteratee(iterable[key], key, iterable);
    }

    return result;
};
