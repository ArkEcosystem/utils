import { concat } from "./concat";
import { filter } from "./filter";
import { PropertyKeys, safeGet } from "./internal";
import { isArray } from "./is-array";
import { isDate } from "./is-date";
import { isRegExp } from "./is-reg-exp";
import { mapArray } from "./map-array";

const isMergeableObject = <T>(value: T): boolean =>
    !!value && typeof value === "object" && !(isRegExp(value) || isDate(value));

const cloneUnlessOtherwiseSpecified = <T>(value: T): T | T[] =>
    // @ts-ignore
    isMergeableObject(value) ? merge(isArray(value) ? [] : {}, value) : value;

const getKeys = <T>(target: T): PropertyKeys => {
    const keys: PropertyKeys = Object.keys(target);

    return keys.concat(
        Object.getOwnPropertySymbols
            ? (filter(Object.getOwnPropertySymbols(target), symbol =>
                  Object.prototype.propertyIsEnumerable.call(target, symbol),
              ) as PropertyKeys)
            : [],
    );
};

export const merge = <T>(target: T, source: T): T | T[] => {
    const sourceIsArray: boolean = isArray(source);
    const targetIsArray: boolean = isArray(target);
    const sourceAndTargetTypesMatch: boolean = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source);
    }

    if (sourceIsArray) {
        return mapArray(concat(target, source), element => cloneUnlessOtherwiseSpecified(element));
    }

    const destination = {};

    // Target Keys
    if (isMergeableObject(target)) {
        const keys: PropertyKeys = getKeys(target);

        for (let i = 0; i < keys.length; i++) {
            const key: PropertyKey = keys[i];

            destination[key] = cloneUnlessOtherwiseSpecified(safeGet(target, key));
        }
    }

    // Source Keys
    const keys: PropertyKeys = getKeys(source);

    for (let i = 0; i < keys.length; i++) {
        const key: PropertyKey = keys[i];

        const valueSource = safeGet(source, key);
        const valueTarget = safeGet(target, key);

        destination[key] =
            isMergeableObject(valueSource) || valueTarget
                ? merge(valueTarget, valueSource)
                : cloneUnlessOtherwiseSpecified(valueSource);
    }

    return (destination as unknown) as T;
};
