import sort from "fast-sort";

export const sortByDesc = <T>(values: any, iteratees?: any): T[] => sort(values).desc(iteratees);
