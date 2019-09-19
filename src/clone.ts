import rfdc from "rfdc";

export const clone = <T>(object: T, opts?: { proto?: boolean; circles?: boolean }): T => rfdc(opts)(object);
