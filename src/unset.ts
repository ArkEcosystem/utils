import { delete as _delete } from "dot-prop";
import { isString } from "./is-string";

export const unset = (object: object, path: string | string[]): boolean => {
    const fragments: string[] = isString(path) ? path.split(".") : path;

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
