import { delete as _delete } from "dot-prop";
import { transformBrackets } from "./internal";

export const unset = (object: object, path: string | string[]): void => _delete(object, transformBrackets(path));
