import { FunctionReturning } from "./internal";
import { min } from "./min";
import { mapArray } from "./map-array";

export const minBy = <T>(iterable: T[], iteratee: FunctionReturning): T => {
    const minValue: number = min(mapArray<T, number>(iterable, iteratee));

    return iterable.find(item => iteratee(item) === minValue);
};
