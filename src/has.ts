import { has as _has } from "dot-prop";
import { transformBrackets } from "./internal";

export const has = (object: object, path: string | string[]): boolean => _has(object, transformBrackets(path));
