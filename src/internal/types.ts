export type FunctionReturning = (...args: any[]) => any;

export type Iteratee = string | FunctionReturning;

export type PropertyKey = string | symbol;
export type PropertyKeys = Array<PropertyKey>;
