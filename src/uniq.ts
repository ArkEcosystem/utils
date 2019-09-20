export const uniq = <T>(iterable: T[]): T[] => {
    if (!iterable || !iterable.length) {
        return [];
    }

    return [...new Set(iterable)];
};
