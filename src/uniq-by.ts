import { FunctionReturning } from "./internal";

export const uniqBy = <T>(values: T[], iteratee?: FunctionReturning): T[] => {
    const result: T[] = [];

    const map: Map<T, boolean> = new Map();

    for (const item of values) {
        const computed = iteratee(item);

        if (!map.has(computed)) {
            map.set(computed, true);

            result.push(item);
        }
    }

    return result;
};
