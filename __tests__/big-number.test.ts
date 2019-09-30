import "jest-extended";

import { BigNumber } from "../src";
import BigNum from "bignumber.js";

describe("#BigNumber", () => {
    it("should be created from hex", () => {
        expect(new BigNumber("0x20", 16).toFixed()).toBe(new BigNum("0x20", 16).toFixed());
    });

    it("should work with a BigNumber instance as input", () => {
        expect(new BigNumber(1e8).plus(new BigNumber(1e8)).toFixed()).toBe(new BigNum(1e8).plus(1e8).toFixed());
    });

    it(".plus", () => {
        expect(new BigNumber(1e8).plus(1e8).toFixed()).toBe(new BigNum(1e8).plus(1e8).toFixed());
    });

    it(".minus", () => {
        expect(new BigNumber(1e8).minus(1e8).toFixed()).toBe(new BigNum(1e8).minus(1e8).toFixed());
    });

    it(".times", () => {
        expect(new BigNumber(1e8).times(1e8).toFixed()).toBe(new BigNum(1e8).times(1e8).toFixed());
    });

    it(".dividedBy", () => {
        expect(new BigNumber(1e8).dividedBy(1e8).toFixed()).toBe(new BigNum(1e8).dividedBy(1e8).toFixed());
    });

    it(".div", () => {
        expect(new BigNumber(1e8).div(1e8).toFixed()).toBe(new BigNum(1e8).div(1e8).toFixed());
    });

    it(".isZero", () => {
        expect(new BigNumber(0).isZero()).toBeTrue();
    });

    it(".comparedTo", () => {
        expect(new BigNumber(5).comparedTo(5)).toBe(0);
        expect(new BigNumber(0).comparedTo(5)).toBe(-1);
        expect(new BigNumber(5).comparedTo(0)).toBe(1);
    });

    it(".isLessThan", () => {
        expect(new BigNumber(5).isLessThan(10)).toBeTrue();
    });

    it(".isLessThanEqual", () => {
        expect(new BigNumber(5).isLessThanEqual(10)).toBeTrue();
        expect(new BigNumber(5).isLessThanEqual(5)).toBeTrue();
    });

    it(".lt", () => {
        expect(new BigNumber(5).lt(19)).toBeTrue();
    });

    it(".lte", () => {
        expect(new BigNumber(5).lte(10)).toBeTrue();
        expect(new BigNumber(5).lte(5)).toBeTrue();
    });

    it(".isGreaterThan", () => {
        expect(new BigNumber(10).isGreaterThan(5)).toBeTrue();
    });

    it(".isGreaterThanEqual", () => {
        expect(new BigNumber(10).isGreaterThanEqual(10)).toBeTrue();
        expect(new BigNumber(10).isGreaterThanEqual(5)).toBeTrue();
    });

    it(".gt", () => {
        expect(new BigNumber(10).gt(5)).toBeTrue();
    });

    it(".gte", () => {
        expect(new BigNumber(10).gte(10)).toBeTrue();
        expect(new BigNumber(10).gte(5)).toBeTrue();
    });

    it(".isEqualTo", () => {
        expect(new BigNumber(10).isEqualTo(10)).toBeTrue();
    });

    it(".isInteger", () => {
        expect(new BigNumber(10).isInteger()).toBeTrue();
        expect(new BigNumber(Number.MAX_SAFE_INTEGER + 1).isInteger()).toBeFalse();
    });

    it(".isNegative", () => {
        expect(new BigNumber(-10).isNegative()).toBeTrue();
    });

    it(".toFixed", () => {
        expect(new BigNumber(1e8).toFixed()).toBe(`${1e8}`);
    });

    it(".toJSON", () => {
        expect(new BigNumber(1e8).toJSON()).toBe(`${1e8}`);
    });
});
