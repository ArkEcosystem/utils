export const castPath = (value: string | string[]): string[] => (Array.isArray(value) ? value : value.split("."));
