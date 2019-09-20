// Taken from https://raw.githubusercontent.com/lodash/lodash/4.17.15-post/lodash.js

/* istanbul ignore next */
const slice = <T>(array: T[], start: number, end: number): T[] => {
    let index = -1;
    let length = array.length;

    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }

    end = end > length ? length : end;

    if (end < 0) {
        end += length;
    }

    length = start > end ? 0 : (end - start) >>> 0;
    start >>>= 0;

    const result: T[] = Array(length);

    while (++index < length) {
        result[index] = array[index + start];
    }

    return result;
};

export const chunk = <T>(iterable: T[], chunkSize: number): T[][] => {
    const iterableLength: number = iterable.length;

    if (!iterableLength || chunkSize <= 0) {
        return [];
    }

    let index: number = 0;
    let resIndex: number = 0;
    const result: T[][] = Array(Math.ceil(iterableLength / chunkSize));

    while (index < iterableLength) {
        result[resIndex++] = slice<T>(iterable, index, (index += chunkSize));
    }

    return result;
};
