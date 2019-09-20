export const max = (values: number[]): number | undefined => {
    if (!values || !values.length) {
        return undefined;
    }

    return Math.max(...values);
};
