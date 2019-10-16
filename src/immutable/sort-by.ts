import { Iteratee } from "../internal";
import { sortBy as baseSortBy } from "../sort-by";

export const sortBy = <T>(values: T[], iteratees?: Iteratee | Iteratee[]): T[] => baseSortBy([...values], iteratees);
