export const last = <T>(values: T[]): T | undefined => (values ? values.reverse()[0] : undefined);
