import flatten from "@flatten/array";
import dottie from "dottie";
import { deepEqual } from "fast-equals";
import sort from "fast-sort";
import stringify from "fast-stringify";
import fast from "fast.js";
import hyperid from "hyperid";
import chunk from "lodash/chunk";
import cloneDeep from "lodash/cloneDeep";
import cloneDeepWith from "lodash/cloneDeepWith";
import compact from "lodash/compact";
import groupBy from "lodash/groupBy";
import head from "lodash/head";
import isEmpty from "lodash/isEmpty";
import isString from "lodash/isString";
import last from "lodash/last";
import partition from "lodash/partition";
import pick from "lodash/pick";
import sample from "lodash/sample";
import shuffle from "lodash/shuffle";
import snakeCase from "lodash/snakeCase";
import sumBy from "lodash/sumBy";
import uniq from "lodash/uniq";
import { camelize as camelCase } from "xcase";

export function sortBy(values: any, iteratees?: any) {
    return sort(values).asc(iteratees);
}

export function sortByDesc(values: any, iteratees?: any) {
    return sort(values).desc(iteratees);
}

export function orderBy(values: Iterable<{}>, iteratees: string[], orders: string[]) {
    return sort(values).by(fast.map(iteratees, (_: string, i: number) => ({ [orders[i]]: iteratees[i] })));
}

export function take(values: any[], size: number) {
    return values.slice(0, size);
}

export function randomString(options?: boolean | hyperid.Options) {
    return hyperid(options)();
}

// MODULE: DOTTIE.JS
export const get = dottie.get;
export const set = dottie.set;

// MODULE: FAST.JS
export const assign = fast.assign;
export const canTry = fast.canTry;
export const concat = fast.concat;
export const fill = fast.fill;
export const filter = fast.filter;
export const forEach = fast.forEach;
export const indexOf = fast.indexOf;
export const intern = fast.intern;
export const map = fast.map;
export const reduce = fast.reduce;
export const some = fast.some;

// MODULE: LODASH
export const isEqual = deepEqual;
export const first = head;
export {
    chunk,
    cloneDeep,
    cloneDeepWith,
    compact,
    groupBy,
    head,
    isEmpty,
    isString,
    last,
    partition,
    pick,
    sample,
    shuffle,
    snakeCase,
    sumBy,
    uniq,
};

// MODULES: RANDOM
export { camelCase, deepEqual, flatten, stringify };
