import { FunctionReturning } from "./internal";

export const mapObject = <T, R>(iterable: T, iteratee: FunctionReturning): R => {
    const keys: string[] = Object.keys(iterable);
    const result = {};

    for (let i = 0; i < keys.length; i++) {
        const key: string = keys[i];

        result[key] = iteratee(iterable[key], key, iterable);
    }

    return result as R;
};
