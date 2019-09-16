import sort from "fast-sort";
import fast from "fast.js";
import { FunctionReturning } from "./internal";
import { isFunction } from "./is-function";
import { isString } from "./is-string";

export const orderBy = <T>(
    values: T[],
    iteratees: FunctionReturning | string | FunctionReturning[] | string[],
    orders: string | string[],
): T[] => {
    if (isString(iteratees)) {
        iteratees = [iteratees] as string[];
    } else if (isFunction(iteratees)) {
        iteratees = [iteratees] as FunctionReturning[];
    }

    if (isString(orders)) {
        orders = [orders];
    }

    return sort(values).by(fast.map(iteratees, (_: string, i: number) => ({ [orders[i]]: iteratees[i] })));
};
