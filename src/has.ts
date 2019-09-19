import { has as _has } from "dot-prop";
import { isString } from "./is-string";

export const has = (object: object, path: string | string[]): boolean => {
    const fragments: string[] = isString(path) ? path.split(".") : path;

    let index = 0;
    const length: number = fragments.length;

    while (object != null && index < length) {
        object = object[fragments[index++]];
    }

    return !!object;
};
