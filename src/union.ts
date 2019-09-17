import { flatten } from "./flatten";
import { uniq } from "./uniq";

export const union = (...args) => uniq(flatten(args));
