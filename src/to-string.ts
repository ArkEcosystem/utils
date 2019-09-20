import { isEmpty } from "./is-empty";
import { isString } from "./is-string";
import { isSymbol } from "./is-symbol";
import { map } from "./map";

export const toString = <T>(value: T): string => {
    if (isEmpty(value)) {
        return "";
    }

    if (isString(value)) {
        return value;
    }

    if (isSymbol(value)) {
        return value.toString();
    }

    if (Array.isArray(value)) {
        /* istanbul ignore next */
        return `${map(value, other => (other === null ? other : toString(other)))}`;
    }

    return `${value}`;
};
