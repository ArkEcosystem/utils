export const castArray = <T>(value: T): T[] => (Array.isArray(value) ? value : [value]);
