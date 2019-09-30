export const indexOf = (subject, target, fromIndex) => {
    const length: number = subject.length;
    let i = 0;

    if (typeof fromIndex === "number") {
        i = fromIndex;

        if (i < 0) {
            i += length;
            if (i < 0) {
                i = 0;
            }
        }
    }

    for (; i < length; i++) {
        if (subject[i] === target) {
            return i;
        }
    }

    return -1;
};
