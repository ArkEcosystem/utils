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
import { camelizeKeys as camelCase } from "xcase";

export function cloneDeep(value) {
    return copy(value);
}

export function cloneDeepWith(value, transformer) {
    return copy(value).map(transformer);
}

export function sortBy(values, iteratees) {
    return sort(values).asc(iteratees);
}

export function sortByDesc(values, iteratees) {
    return sort(values).desc(iteratees);
}

export function orderBy(values, iteratees, orders) {
    const columns = [];
    iteratees.forEach((_, i) => columns.push({ [orders[i]]: iteratees[i] }));

    return sort(values).by(columns);
}

export function pick(value, key) {
    return fast.map(value, i => i[key]);
}

export function sample(values) {
    return values[Math.floor(Math.random() * values.length)];
}

export function sumBy(values, column) {
    return fast.reduce(values, (a, b) => a[column] + b[column], 0);
}

export function compact(value) {
    return value.filter(x => !!x);
}

export function take(values, size) {
    return values.slice(0, size);
}

export function uniq(value) {
    return [...new Set(value)];
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
export const indexOf = fast.indexOf;
export const intern = fast.intern;
export const map = fast.map;
export const reduce = fast.reduce;
export const some = fast.some;

// MODULE: LODASH
export const isEqual = deepEqual;
export { shuffle, chunk, head, last, groupBy, isEmpty, isString, partition, snakeCase };

// MODULES: RANDOM
export const randomString = hyperid;
export { flatten, deepEqual, camelCase, stringify };
