import { getType } from "./get-type";

export const isBigInt = (value: unknown): value is BigInt => getType(value) === "[object BigInt]";
