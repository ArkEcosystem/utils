import { isArray } from "./is-array";

export const concat = <T>(...values): T[] => {
    const result = [];

    let item;
    let childLength;

    for (let i = 0; i < values.length; i++) {
        item = values[i];

        if (isArray(item)) {
            childLength = item.length;

            for (let j = 0; j < childLength; j++) {
                result.push(item[j]);
            }
        } else {
            result.push(item);
        }
    }

    return result;
};
