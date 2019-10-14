import { castPath } from "./internal";
import { isEmpty } from "./is-empty";

export const unset = <T>(object: T, path: string | string[]): boolean => {
    if (isEmpty(object)) {
        return false;
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
