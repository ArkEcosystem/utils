export const chunk = <T>(collection: T[], chunkSize: number, cache = []) => {
    const tmp = [...collection];

    if (chunkSize <= 0) {
        return cache;
    }

    while (tmp.length) {
        cache.push(tmp.splice(0, chunkSize));
    }

    return cache;
};
