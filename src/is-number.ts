import { isEmpty } from "./is-empty";

export const isNumber = (value: unknown): value is number => typeof value === "number";
