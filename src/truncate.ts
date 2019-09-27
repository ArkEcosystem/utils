import { isLessThanOrEqual } from "./is-less-than-or-equal";

export const truncate = (
    value: string,
    options: {
        length?: number;
        omission?: string;
    } = {
        length: 30,
        omission: "...",
    },
): string => {
    if (!options.length) {
        options.length = 30;
    }

    if (!options.omission) {
        options.omission = "...";
    }

    if (isLessThanOrEqual(value.length, options.length)) {
        return value;
    }

    return value.substring(0, options.length) + options.omission;
};
