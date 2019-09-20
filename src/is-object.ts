import { isEmpty } from "./is-empty";

export const isObject = (value: unknown): value is object => typeof value === "object";
