import { castPath } from "./internal";
import { isEmpty } from "./is-empty";

export const get = <T>(object: object, path: string | string[], defaultValue?: T): T | undefined => {
    if (isEmpty(object)) {
        return defaultValue;
    }

    const fragments: string[] = castPath(path);

    let index = 0;
    const length: number = fragments.length;

    while (object != null && index < length) {
        object = object[fragments[index++]];
    }

    return ((object || defaultValue) as unknown) as T;
};
