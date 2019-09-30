export const fill = <T>(subject, value, start?: number, end?: number): T[] => {
    if (start === undefined) {
        start = 0;
    }

    if (end === undefined) {
        end = subject.length;
    }

    for (let i = start; i < end; i++) {
        subject[i] = value;
    }

    return subject;
};
