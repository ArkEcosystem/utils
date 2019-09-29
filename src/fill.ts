export const fill = (subject, value, start, end) => {
    const length: number = subject.length;

    if (start === undefined) {
        start = 0;
    }

    if (end === undefined) {
        end = length;
    }

    for (let i = start; i < end; i++) {
        subject[i] = value;
    }

    return subject;
};
