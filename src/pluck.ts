export const pluck = (input, field) => {
    var length = input.length,
        plucked = [],
        count = 0,
        value,
        i;

    for (i = 0; i < length; i++) {
        value = input[i];

        if (value != null && value[field] !== undefined) {
            plucked[count++] = value[field];
        }
    }

    return plucked;
};
