import { castPath } from "./internal";
import { isEmpty } from "./is-empty";

/**
 * This behaves like lodash.unset with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export const unset = (object: object, path: string | string[]): boolean => {
    if (isEmpty(object)) {
        return true;
    }

    const fragments: string[] = castPath(path);

    let index = 0;
    const length: number = fragments.length;

    while (object != null && index < length) {
        const key = fragments[index++];

        if (index === length) {
            break;
        }

        object = object[key];
    }

    return object === null || delete object[fragments[index - 1]];
};
