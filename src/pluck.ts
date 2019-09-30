export const pluck = (input, field) => {
    const length = input.length;
    const plucked = [];
    let count = 0;
    let value;
    let i;

    for (i = 0; i < length; i++) {
        value = input[i];

        if (value != null && value[field] !== undefined) {
            plucked[count++] = value[field];
        }
    }

    return plucked;
};
