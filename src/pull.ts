import { filter } from "./filter";

export const pull = (collection, ...args) => filter(collection, item => !args.includes(item));
