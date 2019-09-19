const flat = (arr, stash): any[] => {
    for (const element of arr) {
        Array.isArray(element) ? flat(element, stash) : stash.push(element);
    }

    return stash;
};

export const flatten = (arr): any[] => flat(arr, []);
