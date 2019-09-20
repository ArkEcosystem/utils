import { hasProperty } from "./has-property";
import { isString } from "./is-string";

export const set = <T>(object: T, path: string | string[], value: unknown): boolean => {
    const fragments: string[] = isString(path) ? path.split(".") : path;

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
