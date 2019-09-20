import sort from "fast-sort";
import { Iteratee } from "./internal";

export const sortBy = <T>(values: T[], iteratees?: Iteratee): T[] | undefined => sort(values).asc(iteratees);
