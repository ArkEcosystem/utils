import { isArray } from "./is-array";

export const concat = <T>(...args): T[] => {
    const length = args.length;
    const arr = [];
    let i;
    let item;
    let childLength;
    let j;

    for (i = 0; i < length; i++) {
        item = args[i];

        if (isArray(item)) {
            childLength = item.length;

            for (j = 0; j < childLength; j++) {
                arr.push(item[j]);
            }
        } else {
            arr.push(item);
        }
    }

    return arr;
};
