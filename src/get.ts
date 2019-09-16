import { get as _get } from "dot-prop";
import { transformBrackets } from "./internal";

export const get = <T>(object: object, path: string | string[], defaultValue?: T): T | undefined =>
    _get(object, transformBrackets(path), defaultValue);
