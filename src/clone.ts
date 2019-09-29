import { isArray } from "./is-array";

export const clone = input => {
    if (!input || typeof input !== "object") {
        return input;
    }

    if (isArray(input)) {
        const length = input.length;
        const sliced = new Array(length);

        for (let i = 0; i < length; i++) {
            sliced[i] = input[i];
        }

        return sliced;
    }

    const keys = Object.keys(input);
    const cloned = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        cloned[key] = input[key];
    }

    return cloned;
};
