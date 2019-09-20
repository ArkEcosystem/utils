import { castPath } from "./internal";

/**
 * This behaves like lodash.get with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export const get = <T>(object: object, path: string | string[], defaultValue?: T): T => {
    const fragments: string[] = castPath(path);

    let index = 0;
    const length: number = fragments.length;

    while (object != null && index < length) {
        object = object[fragments[index++]];
    }

    return ((object || defaultValue) as unknown) as T;
};
