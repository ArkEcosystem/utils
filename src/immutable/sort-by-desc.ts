import { Iteratee } from "../internal";
import { sortByDesc as baseSortByDesc } from "../sort-by-desc";

export const sortByDesc = <T>(values: T[], iteratees?: Iteratee | Iteratee[]): T[] =>
    baseSortByDesc([...values], iteratees);
