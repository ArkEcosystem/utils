import { hasProperty } from "./has-property";
import { castPath } from "./internal";
import { isObject } from "./is-object";

export const set = <T>(object: T, path: string | string[], value: unknown): boolean => {
    if (!isObject(object)) {
        return false;
    }

    const fragments: string[] = castPath(path);

    let index = 0;
    const length: number = fragments.length;

    while (object != null && index < length) {
        const key = fragments[index++];

        if (index === length) {
            object[key] = value;

            break;
        }

        if (!hasProperty(object, key)) {
            object[key] = {};
        }

        object = object[key];
    }

    return !!object;
};
