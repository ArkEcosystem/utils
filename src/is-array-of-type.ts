export const isArrayOfType = <T>(value: unknown, type: string): value is T[] =>
    Array.isArray(value) && value.every(element => typeof element === type);
