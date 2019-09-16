import { set as _set } from "dot-prop";
import { transformBrackets } from "./internal";

export const set = <T>(object: object, path: string | string[], value: T) =>
    _set(object, transformBrackets(path), value);
