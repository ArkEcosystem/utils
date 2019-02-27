import dayjs from "dayjs-ext";
import "jest-extended";
import { Dato } from "../src/dato";

const epoch = "2017-03-21T13:00:00.000Z";

function add(value: number, unit: string) {
    // @ts-ignore
    return day.add(value, unit).toString();
}

function subtract(value: number, unit: string) {
    // @ts-ignore
    return day.subtract(value, unit).toString();
}

const allowedTypes = [
    ["string", epoch],
    ["number", 1490101200000],
    ["date", new Date(Date.parse(epoch))],
    ["dato", Dato.from(epoch)],
];

let day: dayjs.Dayjs;
beforeEach(() => {
    day = dayjs(epoch).utc();
});

describe("Dato", () => {
    test("returns a dato instance with the current date", () => {
        const now = Dato.now();

        expect(now).toBeInstanceOf(Dato);
        expect(now.toDate()).toEqual(new Date(now.toMilliseconds()));
    });

    describe.each(allowedTypes)("%s", (type, value) => {
        test(`.from()`, () => {
            expect(Dato.from(value)).toBeInstanceOf(Dato);
        });

        test(`.diff()`, () => {
            // @ts-ignore
            expect(Dato.from(value).diff(day.add(10, "milliseconds").toDate())).toBe(10);
        });

        test(`.diffSeconds()`, () => {
            // @ts-ignore
            expect(Dato.from(value).diffSeconds(day.add(10, "seconds").valueOf())).toBe(10);
        });

        test(`.diffMinutes()`, () => {
            // @ts-ignore
            expect(Dato.from(value).diffMinutes(day.add(10, "minutes").valueOf())).toBe(10);
        });

        test(`.isAfter()`, () => {
            // @ts-ignore
            expect(Dato.from(value).isAfter(day.subtract(10, "minutes").toDate())).toBeTrue();
        });

        test(`.isBefore()`, () => {
            // @ts-ignore
            expect(Dato.from(value).isBefore(day.add(10, "minutes").toDate())).toBeTrue();
        });

        test(`.addSeconds()`, () => {
            expect(
                Dato.from(value)
                    .addSeconds(10)
                    .toUTC(),
            ).toBe(add(10, "seconds"));
        });

        test(`.addMinutes()`, () => {
            expect(
                Dato.from(value)
                    .addMinutes(10)
                    .toUTC(),
            ).toBe(add(10, "minutes"));
        });

        test(`.addHours()`, () => {
            expect(
                Dato.from(value)
                    .addHours(10)
                    .toUTC(),
            ).toBe(add(10, "hours"));
        });

        test(`.addDays()`, () => {
            expect(
                Dato.from(value)
                    .addDays(10)
                    .toUTC(),
            ).toBe(add(10, "days"));
        });

        test(`.addMonths()`, () => {
            expect(
                Dato.from(value)
                    .addMonths(10)
                    .toUTC(),
            ).toBe(add(10, "months"));
        });

        test(`.addYears()`, () => {
            expect(
                Dato.from(value)
                    .addYears(10)
                    .toUTC(),
            ).toBe(add(10, "years"));
        });

        test(`.subtractSeconds()`, () => {
            expect(
                Dato.from(value)
                    .subtractSeconds(10)
                    .toUTC(),
            ).toBe(subtract(10, "seconds"));
        });

        test(`.subtractMinutes()`, () => {
            expect(
                Dato.from(value)
                    .subtractMinutes(10)
                    .toUTC(),
            ).toBe(subtract(10, "minutes"));
        });

        test(`.subtractHours()`, () => {
            expect(
                Dato.from(value)
                    .subtractHours(10)
                    .toUTC(),
            ).toBe(subtract(10, "hours"));
        });

        test(`.subtractDays()`, () => {
            expect(
                Dato.from(value)
                    .subtractDays(10)
                    .toUTC(),
            ).toBe(subtract(10, "days"));
        });

        test(`.subtractMonths()`, () => {
            expect(
                Dato.from(value)
                    .subtractMonths(10)
                    .toUTC(),
            ).toBe(subtract(10, "months"));
        });

        test(`.subtractYears()`, () => {
            expect(
                Dato.from(value)
                    .subtractYears(10)
                    .toUTC(),
            ).toBe(subtract(10, "years"));
        });

        test(`.subtractDays()`, () => {
            expect(
                Dato.from(value)
                    .subtractDays(10)
                    .toUTC(),
            ).toBe(subtract(10, "days"));
        });

        test(`.toDate()`, () => {
            expect(Dato.from(value).toDate()).toEqual(day.toDate());
        });

        test(`.toMilliseconds()`, () => {
            expect(Dato.from(value).toMilliseconds()).toBe(day.valueOf());
        });

        test(`.toUTC()`, () => {
            expect(Dato.from(value).toUTC()).toBe(day.toString());
        });

        test(`.toISO()`, () => {
            expect(Dato.from(value).toISO()).toBe(day.toISOString());
        });

        test(`.toUnix()`, () => {
            expect(Dato.from(value).toUnix()).toBe(day.unix());
        });
    });
});
