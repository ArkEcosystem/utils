import { FunctionReturning } from "./internal";
import { mapObject } from "./map-object";

export const mapValues = <T>(iterable: T, iteratee: FunctionReturning): T => mapObject(iterable, iteratee);
