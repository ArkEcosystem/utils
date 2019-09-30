import { filter } from "./filter";
import { FunctionReturning } from "./internal";

export const findKey = <T>(iterable: T, iteratee: FunctionReturning): string =>
    Object.keys(filter(iterable as any, iteratee))[0];
