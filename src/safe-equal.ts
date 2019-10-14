import { Binary, timingSafeEqual } from "crypto";

export const safeEqual = (a: Binary, b: Binary): boolean => {
    try {
        return timingSafeEqual(a, b);
    } catch {
        return false;
    }
};
