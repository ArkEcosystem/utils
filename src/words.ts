export const words = (value: string): string[] => value.match(/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g) || [];
