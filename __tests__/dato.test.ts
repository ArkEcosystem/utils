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
    ["dato", Dato.make(epoch)],
];

let day: dayjs.Dayjs;
beforeEach(() => {
    day = dayjs(epoch).utc();
});

describe("Dato", () => {
    test("returns a dato instance with the current date", () => {
        const now = Dato.make();

        expect(now).toBeInstanceOf(Dato);
        expect(now.toDate()).toEqual(new Date(now.toMilliseconds()));
    });

    describe.each(allowedTypes)("%s", (type, value) => {
        test(`.make()`, () => {
            expect(Dato.make(value)).toBeInstanceOf(Dato);
        });

        test(`.diff()`, () => {
            // @ts-ignore
            expect(Dato.make(value).diff(day.add(10, "milliseconds").toDate())).toBe(10);
        });

        test(`.diffSeconds()`, () => {
            // @ts-ignore
            expect(Dato.make(value).diffSeconds(day.add(10, "seconds").valueOf())).toBe(10);
        });

        test(`.diffMinutes()`, () => {
            // @ts-ignore
            expect(Dato.make(value).diffMinutes(day.add(10, "minutes").valueOf())).toBe(10);
        });

        test(`.isAfter()`, () => {
            // @ts-ignore
            expect(Dato.make(value).isAfter(day.subtract(10, "minutes").toDate())).toBeTrue();
        });

        test(`.isBefore()`, () => {
            // @ts-ignore
            expect(Dato.make(value).isBefore(day.add(10, "minutes").toDate())).toBeTrue();
        });

        test(`.addSeconds()`, () => {
            expect(
                Dato.make(value)
                    .addSeconds(10)
                    .toUTC(),
            ).toBe(add(10, "seconds"));
        });

        test(`.addMinutes()`, () => {
            expect(
                Dato.make(value)
                    .addMinutes(10)
                    .toUTC(),
            ).toBe(add(10, "minutes"));
        });

        test(`.addHours()`, () => {
            expect(
                Dato.make(value)
                    .addHours(10)
                    .toUTC(),
            ).toBe(add(10, "hours"));
        });

        test(`.addDays()`, () => {
            expect(
                Dato.make(value)
                    .addDays(10)
                    .toUTC(),
            ).toBe(add(10, "days"));
        });

        test(`.addMonths()`, () => {
            expect(
                Dato.make(value)
                    .addMonths(10)
                    .toUTC(),
            ).toBe(add(10, "months"));
        });

        test(`.addYears()`, () => {
            expect(
                Dato.make(value)
                    .addYears(10)
                    .toUTC(),
            ).toBe(add(10, "years"));
        });

        test(`.subtractSeconds()`, () => {
            expect(
                Dato.make(value)
                    .subtractSeconds(10)
                    .toUTC(),
            ).toBe(subtract(10, "seconds"));
        });

        test(`.subtractMinutes()`, () => {
            expect(
                Dato.make(value)
                    .subtractMinutes(10)
                    .toUTC(),
            ).toBe(subtract(10, "minutes"));
        });

        test(`.subtractHours()`, () => {
            expect(
                Dato.make(value)
                    .subtractHours(10)
                    .toUTC(),
            ).toBe(subtract(10, "hours"));
        });

        test(`.subtractDays()`, () => {
            expect(
                Dato.make(value)
                    .subtractDays(10)
                    .toUTC(),
            ).toBe(subtract(10, "days"));
        });

        test(`.subtractMonths()`, () => {
            expect(
                Dato.make(value)
                    .subtractMonths(10)
                    .toUTC(),
            ).toBe(subtract(10, "months"));
        });

        test(`.subtractYears()`, () => {
            expect(
                Dato.make(value)
                    .subtractYears(10)
                    .toUTC(),
            ).toBe(subtract(10, "years"));
        });

        test(`.subtractDays()`, () => {
            expect(
                Dato.make(value)
                    .subtractDays(10)
                    .toUTC(),
            ).toBe(subtract(10, "days"));
        });

        test(`.toDate()`, () => {
            expect(Dato.make(value).toDate()).toEqual(day.toDate());
        });

        test(`.toMilliseconds()`, () => {
            expect(Dato.make(value).toMilliseconds()).toBe(day.valueOf());
        });

        test(`.toUTC()`, () => {
            expect(Dato.make(value).toUTC()).toBe(day.toString());
        });

        test(`.toISO()`, () => {
            expect(Dato.make(value).toISO()).toBe(day.toISOString());
        });

        test(`.toUnix()`, () => {
            expect(Dato.make(value).toUnix()).toBe(day.unix());
        });
    });
});
