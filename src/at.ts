import { get } from "./get";
import { mapObject } from "./map-object";

/**
 * This behaves like lodash.at with the major difference of
 * not supporting square brackets which nets a 3x performance gain.
 */
export const at = <T>(object: object, paths: string[]): T[] =>
    Object.values(mapObject(paths, (path: string) => get(object, path)));
