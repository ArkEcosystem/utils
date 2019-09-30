import { FunctionReturning } from "./internal";
import { mapArray } from "./map-array";
import { max } from "./max";

export const maxBy = <T>(iterable: T[], iteratee: FunctionReturning): T => {
    const maxValue: number = max(mapArray(iterable, iteratee));

    return iterable.find(item => iteratee(item) === maxValue);
};
