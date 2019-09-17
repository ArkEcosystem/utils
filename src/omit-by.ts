import { filter } from "./filter";

export const omitBy = (collection, predicate) => filter(collection, value => !predicate(value));
