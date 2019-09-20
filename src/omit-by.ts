import { filter } from "./filter";
import { FunctionReturning } from "./internal";

export const omitBy = <T>(iterable: T, iteratee: FunctionReturning): T | undefined =>
    filter(iterable, value => !iteratee(value));
