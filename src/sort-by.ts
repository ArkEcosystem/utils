import sort from "fast-sort";

import { Iteratee } from "./internal";

export const sortBy = <T>(values: T[], iteratees?: Iteratee | Iteratee[]): T[] => sort(values).asc(iteratees);
