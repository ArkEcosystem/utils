import { pull } from "./pull";

export const pullAll = (collection, predicate) => pull(collection, ...predicate);
