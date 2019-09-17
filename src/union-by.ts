import { flatten } from "./flatten";
import { uniqBy } from "./uniq-by";

export const unionBy = (...args) => {
    const iteratee = args.pop();

    return uniqBy(flatten(args), iteratee);
};
