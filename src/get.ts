import { get as _get } from "dot-prop";
import { transformBrackets } from "./internal";

export const get = <T>(object: object, path: string | string[], defaultValue?: T) =>
    _get(object, transformBrackets(path), defaultValue);
