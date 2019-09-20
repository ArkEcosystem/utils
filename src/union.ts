import { flatten } from "./flatten";
import { uniq } from "./uniq";

export const union = <T>(...args): T[] => uniq(flatten(args));
