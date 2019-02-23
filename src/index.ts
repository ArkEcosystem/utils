import flatten from "@flatten/array";
import dottie from "dottie";
import stringify from "fast-safe-stringify";
import sort from "fast-sort";
import fast from "fast.js";
import hyperid from "hyperid";

type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any;

export function sortBy<T = any>(values: any, iteratees?: any): T[] {
    return sort(values).asc(iteratees);
}

export function sortByDesc<T = any>(values: any, iteratees?: any): T[] {
    return sort(values).desc(iteratees);
}

export function orderBy<T = any>(
    values: T[],
    iteratees: CallbackFunctionVariadicAnyReturn | string | CallbackFunctionVariadicAnyReturn[] | string[],
    orders: string | string[],
): T[] {
    if (typeof iteratees === "string") {
        iteratees = [iteratees] as string[];
    } else if (typeof iteratees === "function") {
        iteratees = [iteratees] as CallbackFunctionVariadicAnyReturn[];
    }

    if (typeof orders === "string") {
        orders = [orders];
    }

    return sort(values).by(fast.map(iteratees, (_: string, i: number) => ({ [orders[i]]: iteratees[i] })));
}

export function randomString(options?: boolean | hyperid.Options): string {
    return hyperid(options)();
}

export function capitalize(text: string): string {
    return text[0].toUpperCase() + text.slice(1);
}

export function uncapitalize(text: string): string {
    return text[0].toLowerCase() + text.slice(1);
}

// MODULE: DOTTIE.JS
export const get = dottie.get;
export const set = dottie.set;

// MODULE: FAST.JS
export const assign = fast.assign;
export const tryCatch = fast.try;
export const concat = fast.concat;
export const fill = fast.fill;
export const filter = fast.filter;
export const forEach = fast.forEach;
export const indexOf = fast.indexOf;
export const intern = fast.intern;
export const map = fast.map;
export const reduce = fast.reduce;
export const some = fast.some;

// MODULES: RANDOM
export { flatten, stringify };
