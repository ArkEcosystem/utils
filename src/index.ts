import flatten from "@flatten/array";
import dottie from "dottie";
import sort from "fast-sort";
import stringify from "fast-stringify";
import fast from "fast.js";
import hyperid from "hyperid";

export function sortBy(values: any, iteratees?: any): any {
    return sort(values).asc(iteratees);
}

export function sortByDesc(values: any, iteratees?: any): any {
    return sort(values).desc(iteratees);
}

export function orderBy(values: Iterable<{}>, iteratees: string[], orders: string[]): Iterable<{}> {
    return sort(values).by(fast.map(iteratees, (_: string, i: number) => ({ [orders[i]]: iteratees[i] })));
}

export function randomString(options?: boolean | hyperid.Options): string {
    return hyperid(options)();
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
