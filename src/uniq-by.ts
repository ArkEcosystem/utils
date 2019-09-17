import { filter } from "./filter";
import { isFunction } from "./is-function";

export const uniqBy = <T>(values: any, iteratees?: any): T[] => {
    const func = isFunction(iteratees) ? iteratees : item => item[iteratees];

    const result: T[] = [];

    const map: Map<any, boolean> = new Map();

    for (const item of values) {
        const computed = func(item);

        if (!map.has(computed)) {
            map.set(computed, true);

            result.push(item);
        }
    }

    return result;
};
