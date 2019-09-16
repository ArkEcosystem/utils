import sort from "fast-sort";

export const sortBy = <T>(values: any, iteratees?: any): T[] => sort(values).asc(iteratees);
