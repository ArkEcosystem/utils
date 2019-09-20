export const min = (values: number[]): number | undefined => {
    if (!values || !values.length) {
        return undefined;
    }

    return Math.min(...values);
};
