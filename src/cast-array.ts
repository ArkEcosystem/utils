import { isArray } from "./is-array";
import { isFunction } from "./is-function";
import { isString } from "./is-string";

export const castArray = <T>(value: any): T[] => {
    if (value === null || value === undefined) {
        return [];
    }

    if (isArray(value)) {
        return value as T[];
    }

    if (isString(value)) {
        return [(value as unknown) as T];
    }

    if (isFunction(value[Symbol.iterator])) {
        return [...value];
    }

    return [value];
};
