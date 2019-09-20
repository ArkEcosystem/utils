import { toLower } from "../../to-lower";
import { CAMEL_CASE_REGEXP } from "./camel-case-regexp";
import { CAMEL_CASE_UPPER_REGEXP } from "./camel-case-upper-regexp";
import { NON_WORD_REGEXP } from "./non-word-regexp";

// Based on https://github.com/blakeembrey/no-case
export const removeCase = (str: string): string =>
    toLower(
        str
            // Support camel case ("camelCase" -> "camel Case").
            .replace(CAMEL_CASE_REGEXP, "$1 $2")
            // Support odd camel case ("CAMELCase" -> "CAMEL Case").
            .replace(CAMEL_CASE_UPPER_REGEXP, "$1 $2")
            // Remove all non-word characters and replace with a single space.
            .replace(NON_WORD_REGEXP, (match, index, value) =>
                index === 0 || index === value.length - match.length ? "" : " ",
            ),
    );
