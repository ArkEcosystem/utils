import { timingSafeEqual } from "crypto";

export const safeEqual = (a: NodeJS.ArrayBufferView, b: NodeJS.ArrayBufferView): boolean => {
    try {
        return timingSafeEqual(a, b);
    } catch {
        return false;
    }
};
