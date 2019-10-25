import { castPath } from "./internal";
import { isObject } from "./is-object";
import { isString } from "./is-string";

export const get = <T, V>(object: T, path: string | string[], defaultValue?: V): V | undefined => {
    if (!isObject(object) || !isString(path)) {
        return defaultValue;
    }

    const pathArray: string[] = castPath(path);

    for (let i = 0; i < pathArray.length; i++) {
        if (!Object.prototype.propertyIsEnumerable.call(object, pathArray[i])) {
            return defaultValue;
        }

        object = object[pathArray[i]];

        if (object === undefined || object === null) {
            if (i !== pathArray.length - 1) {
                return defaultValue;
            }

            break;
        }
    }

    return (object as unknown) as V;
};
