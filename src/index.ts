import flatten from "@flatten/array";
import dottie from "dottie";
import copy from "fast-copy";
import { deepEqual } from "fast-equals";
import sort from "fast-sort";
import stringify from "fast-stringify";
import fast from "fast.js";
import hyperid from "hyperid";
import chunk from "lodash/chunk";
import groupBy from "lodash/groupBy";
import head from "lodash/head";
import isEmpty from "lodash/isEmpty";
import isString from "lodash/isString";
import last from "lodash/last";
import partition from "lodash/partition";
import shuffle from "lodash/shuffle";
import snakeCase from "lodash/snakeCase";
import { camelize as camelCase } from "xcase";

export function cloneDeepWith(value: any, customizer: any) {
    return copy(value).map(customizer);
}

export function sortBy(values: any, iteratees: any) {
    return sort(values).asc(iteratees);
}

export function sortByDesc(values: any, iteratees: any) {
    return sort(values).desc(iteratees);
}

export function orderBy(values: Iterable<{}>, iteratees: string[], orders: string[]) {
    return sort(values).by(fast.map(iteratees, (_: string, i: number) => ({ [orders[i]]: iteratees[i] })));
}

export function pick(values: Iterable<{}>, key: string) {
    return fast.map(values, (i: { [x: string]: any }) => i[key]);
}

export function sample(values: any[]) {
    return values[Math.floor(Math.random() * values.length)];
}

export function sumBy(values: Iterable<{}>, column: string) {
    return fast.reduce(
        values,
        (accumulator: number, currentValue: { [x: string]: number }) => accumulator + currentValue[column],
        0,
    );
}

export function compact(values: Iterable<{}>) {
    return fast.filter(values, (i: any) => !!i);
}

export function take(values: any[], size: number) {
    return values.slice(0, size);
}

export function uniq(value: Iterable<string | number>) {
    return [...new Set(value)];
}

export function randomString(options?: boolean | hyperid.Options) {
    return hyperid(options)();
}

// MODULE: FAST-COPY
export const cloneDeep = copy;

// MODULE: DOTTIE.JS
export const get = dottie.get;
export const set = dottie.set;

// MODULE: FAST.JS
export const assign = fast.assign;
export const canTry = fast.canTry;
export const concat = fast.concat;
export const fill = fast.fill;
export const filter = fast.filter;
export const indexOf = fast.indexOf;
export const intern = fast.intern;
export const map = fast.map;
export const reduce = fast.reduce;
export const some = fast.some;

// MODULE: LODASH
export const isEqual = deepEqual;
export { shuffle, chunk, head, last, groupBy, isEmpty, isString, partition, snakeCase };

// MODULES: RANDOM
export { flatten, deepEqual, camelCase, stringify };
