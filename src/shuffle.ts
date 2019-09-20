export const shuffle = <T>(collection: T[]): T[] => {
    for (let i = 0; i < collection.length; i++) {
        const rand = Math.floor(Math.random() * (i + 1));
        const value = collection[i];

        collection[i] = collection[rand];
        collection[rand] = value;
    }

    return collection;
};
