import { Iteratee } from "./internal";
import { isString } from "./is-string";

export const uniqBy = <T>(values: T[], iteratee?: Iteratee): T[] => {
    const func = isString(iteratee) ? item => item[iteratee] : iteratee;

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
