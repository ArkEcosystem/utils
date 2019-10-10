import { isArray } from "./is-array";

export const concat = <T>(...values: T[]): T[] => {
    const result: T[] = [];

    for (let i = 0; i < values.length; i++) {
        const item: T = values[i];

        if (isArray(item)) {
            const childLength: number = item.length;

            for (let j = 0; j < childLength; j++) {
                result.push(item[j]);
            }
        } else {
            result.push(item);
        }
    }

    return result;
};
