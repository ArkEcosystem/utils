import { castPath } from "./internal";
import { isEmpty } from "./is-empty";

/**
 * This behaves like lodash.has with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export const has = (object: object, path: string | string[]): boolean => {
    if (isEmpty(object)) {
        return false;
    }

    const fragments: string[] = castPath(path);

    let index = 0;
    const length: number = fragments.length;

    while (object != null && index < length) {
        object = object[fragments[index++]];
    }

    return !!object;
};
