import dayjs from "dayjs-ext";
import "jest-extended";
import { dato, Dato } from "../src/dato";

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
    ["dato", dato(epoch)],
];

let day: dayjs.Dayjs;
beforeEach(() => {
    day = dayjs(epoch).utc();
});

describe("Dato", () => {
    test("returns a dato instance with the current date", () => {
        const now = dato();

        expect(now).toBeInstanceOf(Dato);
        expect(now.toDate()).toEqual(new Date(now.toMilliseconds()));
    });

    describe.each(allowedTypes)("%s", (type, value) => {
        test(`.make()`, () => {
            expect(dato(value)).toBeInstanceOf(Dato);
        });

        test(`.diff()`, () => {
            // @ts-ignore
            expect(dato(value).diff(day.add(10, "milliseconds").toDate())).toBe(10);
        });

        test(`.diffSeconds()`, () => {
            // @ts-ignore
            expect(dato(value).diffSeconds(day.add(10, "seconds").valueOf())).toBe(10);
        });

        test(`.diffMinutes()`, () => {
            // @ts-ignore
            expect(dato(value).diffMinutes(day.add(10, "minutes").valueOf())).toBe(10);
        });

        test(`.isAfter()`, () => {
            // @ts-ignore
            expect(dato(value).isAfter(day.subtract(10, "minutes").toDate())).toBeTrue();
        });

        test(`.isBefore()`, () => {
            // @ts-ignore
            expect(dato(value).isBefore(day.add(10, "minutes").toDate())).toBeTrue();
        });

        test(`.addSeconds()`, () => {
            expect(
                dato(value)
                    .addSeconds(10)
                    .toUTC(),
            ).toBe(add(10, "seconds"));
        });

        test(`.addMinutes()`, () => {
            expect(
                dato(value)
                    .addMinutes(10)
                    .toUTC(),
            ).toBe(add(10, "minutes"));
        });

        test(`.addHours()`, () => {
            expect(
                dato(value)
                    .addHours(10)
                    .toUTC(),
            ).toBe(add(10, "hours"));
        });

        test(`.addDays()`, () => {
            expect(
                dato(value)
                    .addDays(10)
                    .toUTC(),
            ).toBe(add(10, "days"));
        });

        test(`.addMonths()`, () => {
            expect(
                dato(value)
                    .addMonths(10)
                    .toUTC(),
            ).toBe(add(10, "months"));
        });

        test(`.addYears()`, () => {
            expect(
                dato(value)
                    .addYears(10)
                    .toUTC(),
            ).toBe(add(10, "years"));
        });

        test(`.subtractSeconds()`, () => {
            expect(
                dato(value)
                    .subtractSeconds(10)
                    .toUTC(),
            ).toBe(subtract(10, "seconds"));
        });

        test(`.subtractMinutes()`, () => {
            expect(
                dato(value)
                    .subtractMinutes(10)
                    .toUTC(),
            ).toBe(subtract(10, "minutes"));
        });

        test(`.subtractHours()`, () => {
            expect(
                dato(value)
                    .subtractHours(10)
                    .toUTC(),
            ).toBe(subtract(10, "hours"));
        });

        test(`.subtractDays()`, () => {
            expect(
                dato(value)
                    .subtractDays(10)
                    .toUTC(),
            ).toBe(subtract(10, "days"));
        });

        test(`.subtractMonths()`, () => {
            expect(
                dato(value)
                    .subtractMonths(10)
                    .toUTC(),
            ).toBe(subtract(10, "months"));
        });

        test(`.subtractYears()`, () => {
            expect(
                dato(value)
                    .subtractYears(10)
                    .toUTC(),
            ).toBe(subtract(10, "years"));
        });

        test(`.subtractDays()`, () => {
            expect(
                dato(value)
                    .subtractDays(10)
                    .toUTC(),
            ).toBe(subtract(10, "days"));
        });

        test(`.toDate()`, () => {
            expect(dato(value).toDate()).toEqual(day.toDate());
        });

        test(`.toMilliseconds()`, () => {
            expect(dato(value).toMilliseconds()).toBe(day.valueOf());
        });

        test(`.toUTC()`, () => {
            expect(dato(value).toUTC()).toBe(day.toString());
        });

        test(`.toISO()`, () => {
            expect(dato(value).toISO()).toBe(day.toISOString());
        });

        test(`.toUnix()`, () => {
            expect(dato(value).toUnix()).toBe(day.unix());
        });
    });
});
