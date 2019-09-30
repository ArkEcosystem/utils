import { FunctionReturning } from "./internal";

export const partition = <T>(iterable: T[], iteratee: FunctionReturning): [T[], T[]] =>
    iterable.reduce((result, value) => (result[iteratee(value) ? 0 : 1].push(value), result), [[], []]);
