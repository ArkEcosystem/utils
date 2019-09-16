export const shuffle = <T>(collection: T[]): T[] => {
    const shuffledValues: T[] = [...collection];

    for (let i = collection.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [collection[i], collection[j]] = [collection[j], collection[i]];
    }

    return shuffledValues;
};
