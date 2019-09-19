import { get as _get } from "dot-prop";
import { isString } from "./is-string";

/**
 * This behaves like lodash.get with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export const get = <T>(object: object, path: string | string[], defaultValue?: T): T | undefined => {
    const fragments: string[] = isString(path) ? path.split(".") : path;

    let index = 0;
    const length: number = fragments.length;

    while (object != null && index < length) {
        object = object[fragments[index++]];
    }

    if (index && index === length) {
        // @ts-ignore
        return object || defaultValue;
    }

    return defaultValue;
};
