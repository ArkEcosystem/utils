export const pick = (collection: object, keys: string[]) => {
    const newValues: object = {};

    for (const key of keys) {
        newValues[key] = collection[key];
    }

    return newValues;
};
