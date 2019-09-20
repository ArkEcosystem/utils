import { parse as bourne } from "@hapi/bourne";

export const parse = (json: string) => bourne(json);
