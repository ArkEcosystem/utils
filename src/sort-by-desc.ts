import sort from "fast-sort";

import { Iteratee } from "./internal";

export const sortByDesc = <T>(values: T[], iteratees?: Iteratee | Iteratee[]): T[] => sort(values).desc(iteratees);
