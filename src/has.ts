import { castPath } from "./internal";
import { isObject } from "./is-object";
import { isString } from "./is-string";

export const has = <T>(object: T, path: string | string[]): boolean => {
    if (!isObject(object) || !isString(path)) {
        return false;
    }

    const pathArray: string[] = castPath(path);

    for (let i = 0; i < pathArray.length; i++) {
        if (!isObject(object)) {
            return false;
        }

        if (!(pathArray[i] in object)) {
            return false;
        }

        object = object[pathArray[i]];
    }

    return true;
};
