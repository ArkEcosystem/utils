export const lastIndexOf = (subject, target, fromIndex) => {
    const length: number = subject.length;
    let i = length - 1;

    if (typeof fromIndex === "number") {
        i = fromIndex;
        if (i < 0) {
            i += length;
        }
    }

    for (; i >= 0; i--) {
        if (subject[i] === target) {
            return i;
        }
    }

    return -1;
};
