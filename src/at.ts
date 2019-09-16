import { get } from "./get";

export const at = <T>(object: object, paths: string[]): T[] => paths.map((path: string) => get(object, path));
