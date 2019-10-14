import { castPath } from "./internal";
import { isEmpty } from "./is-empty";

export const get = <T, V>(object: T, path: string | string[], defaultValue?: V): V | undefined => {
    if (isEmpty(object)) {
        return defaultValue;
    }

    const fragments: string[] = castPath(path);

    let index = 0;
    const length: number = fragments.length;

    while (object != null && index < length) {
        object = object[fragments[index++]];
    }

    return (object || defaultValue) as V;
};
