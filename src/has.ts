import { castPath } from "./internal";
import { isEmpty } from "./is-empty";

export const has = <T>(object: T, path: string | string[]): boolean => {
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
