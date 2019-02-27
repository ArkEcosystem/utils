import dayjs from "dayjs-ext";
import "jest-extended";
import { Dato } from "../src/dato";

const epoch = "2017-03-21T13:00:00.000Z";

// @ts-ignore
const add = (value: number, unit: string) => day.add(value, unit).toString();

// @ts-ignore
const subtract = (value: number, unit: string) => day.subtract(value, unit).toString();

let day: dayjs.Dayjs;
let mom: Dato;
beforeEach(() => {
    day = dayjs(epoch).utc();
    mom = Dato.fromString(epoch);
});

describe("Dato", () => {
    it("now", () => {
        expect(Dato.now()).toBeInstanceOf(Dato);
    });

    it("fromString", () => {
        expect(Dato.fromString(epoch)).toBeInstanceOf(Dato);
    });

    it("fromDate", () => {
        expect(Dato.fromDate(new Date())).toBeInstanceOf(Dato);
    });

    it("diff (with date)", () => {
        // @ts-ignore
        expect(mom.diff(day.add(10, "milliseconds").toDate())).toBe(10);
    });

    it("diff (with number)", () => {
        // @ts-ignore
        expect(mom.diff(day.add(10, "milliseconds").valueOf())).toBe(10);
    });

    it("diffSeconds", () => {
        // @ts-ignore
        expect(mom.diffSeconds(day.add(10, "seconds").valueOf())).toBe(10);
    });

    it("diffMinutes", () => {
        // @ts-ignore
        expect(mom.diffMinutes(day.add(10, "minutes").valueOf())).toBe(10);
    });

    it("isAfter", () => {
        // @ts-ignore
        expect(mom.isAfter(day.subtract(10, "minutes").toDate())).toBeTrue();
    });

    it("isBefore", () => {
        // @ts-ignore
        expect(mom.isBefore(day.add(10, "minutes").toDate())).toBeTrue();
    });

    it("addSeconds", () => {
        expect(mom.addSeconds(10).toUTC()).toBe(add(10, "seconds"));
    });

    it("addMinutes", () => {
        expect(mom.addMinutes(10).toUTC()).toBe(add(10, "minutes"));
    });

    it("addHours", () => {
        expect(mom.addHours(10).toUTC()).toBe(add(10, "hours"));
    });

    it("addDays", () => {
        expect(mom.addDays(10).toUTC()).toBe(add(10, "days"));
    });

    it("addMonths", () => {
        expect(mom.addMonths(10).toUTC()).toBe(add(10, "months"));
    });

    it("addYears", () => {
        expect(mom.addYears(10).toUTC()).toBe(add(10, "years"));
    });

    it("subtractSeconds", () => {
        expect(mom.subtractSeconds(10).toUTC()).toBe(subtract(10, "seconds"));
    });

    it("subtractMinutes", () => {
        expect(mom.subtractMinutes(10).toUTC()).toBe(subtract(10, "minutes"));
    });

    it("subtractHours", () => {
        expect(mom.subtractHours(10).toUTC()).toBe(subtract(10, "hours"));
    });

    it("subtractDays", () => {
        expect(mom.subtractDays(10).toUTC()).toBe(subtract(10, "days"));
    });

    it("subtractMonths", () => {
        expect(mom.subtractMonths(10).toUTC()).toBe(subtract(10, "months"));
    });

    it("subtractYears", () => {
        expect(mom.subtractYears(10).toUTC()).toBe(subtract(10, "years"));
    });

    it("subtractDays", () => {
        expect(mom.subtractDays(10).toUTC()).toBe(subtract(10, "days"));
    });

    it("toDate", () => {
        expect(mom.toDate()).toEqual(day.toDate());
    });

    it("toMilliseconds", () => {
        expect(mom.toMilliseconds()).toBe(day.valueOf());
    });

    it("toUTC", () => {
        expect(mom.toUTC()).toBe(day.toString());
    });

    it("toISO", () => {
        expect(mom.toISO()).toBe(day.toISOString());
    });

    it("toUnix", () => {
        expect(mom.toUnix()).toBe(day.unix());
    });
});
