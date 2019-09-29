export const filter = (iterable, iteratee) => {
    const result = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iteratee(iterable[i], i, iterable)) {
            result.push(iterable[i]);
        }
    }

    return result;
};
