import rfdc from "rfdc";

export const cloneDeep = <T>(object: T, opts?: { proto?: boolean; circles?: boolean }): T => rfdc(opts)(object);
