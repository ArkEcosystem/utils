import { map } from ".";
import { get } from "./get";

export const at = <T>(object: object, paths: string[]): T[] => map(paths, (path: string) => get(object, path));
