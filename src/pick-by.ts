import { filter } from "./filter";

export const pickBy = (collection, predicate) => filter(collection, value => predicate(value));
