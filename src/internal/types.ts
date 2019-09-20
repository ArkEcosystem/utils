export type FunctionReturning = <T>(...args: any[]) => T;

export type Iteratee = string | FunctionReturning;
