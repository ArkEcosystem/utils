const REPLACE_BRACKETS = /\[([^\[\]]+)\]/g;
const LFT_RT_TRIM_DOTS = /^[.]*|[.]*$/g;

export type FunctionReturning = <T>(...args: any[]) => T;

export const transformBrackets = (value: string | string[]): string => {
    if (Array.isArray(value)) {
        value = value.join(".");
    }

    return value
        .replace(REPLACE_BRACKETS, ".$1")
        .replace(LFT_RT_TRIM_DOTS, "")
        .replace("..", ".");
};
