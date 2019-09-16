import { set as _set } from "dot-prop";
import { transformBrackets } from "./internal";

export const set = <T>(object: T, path: string | string[], value: unknown): T =>
    _set(object, transformBrackets(path), value);
