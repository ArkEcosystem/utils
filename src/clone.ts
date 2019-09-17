import { parse } from "./parse";
import { stringify } from "./stringify";

export const clone = <T>(value): T => parse(stringify(value));
