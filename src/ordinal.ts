export const ordinal = (value: number): string => {
    const suffixes: string[] = ["th", "st", "nd", "rd"];
    const index: number = value % 100;

    return value + (suffixes[index] || suffixes[0]);
};
