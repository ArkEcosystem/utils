import { toLower } from "../../to-lower";
import { CAMEL_CASE_REGEXP } from "./camel-case-regexp";
import { CAMEL_CASE_UPPER_REGEXP } from "./camel-case-upper-regexp";

// Based on https://github.com/blakeembrey/no-case
export const removeCase = (input: string): string =>
    toLower(
        input
            // Support camel case ("camelCase" -> "camel Case").
            .replace(CAMEL_CASE_REGEXP, "$1 $2")
            // Support odd camel case ("CAMELCase" -> "CAMEL Case").
            .replace(CAMEL_CASE_UPPER_REGEXP, "$1 $2")
            // Match words composed of alphanumeric characters.
            .match(/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g)
            .join(" "),
    );

// This is 300% faster but unable to handle camelCase.
// input
//     .match(/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g)
//     .join(" ")
//     .toLowerCase();
