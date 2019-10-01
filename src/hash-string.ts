export const hashString = (value: string): number => {
    let hash: number = 0;

    if (value.length == 0) {
        return hash;
    }

    for (let i = 0; i < value.length; i++) {
        hash = (hash << 5) - hash;
        hash = hash + value.charCodeAt(i);
        hash = hash & hash;
    }

    return Math.abs(hash);
};
