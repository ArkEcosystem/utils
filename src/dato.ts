type DateTime = string | number | Dato | Date;

export class Dato {
    private date: Date = new Date();

    public constructor(value?: DateTime) {
        if (value) {
            this.date = this.castDateTime(value);
        }

        this.ensureUTC();
    }

    public diff(value: DateTime): number {
        return Math.abs(this.castDateTime(value).getTime() - this.date.getTime());
    }

    public diffSeconds(value: DateTime): number {
        return this.diff(value) / 1e3;
    }

    public diffMinutes(value: DateTime): number {
        return this.diffSeconds(value) / 60;
    }

    public isAfter(value: DateTime): boolean {
        return this.date > this.castDateTime(value);
    }

    public isBefore(value: DateTime): boolean {
        return this.date < this.castDateTime(value);
    }

    public addSeconds(value: number): Dato {
        this.add(value, "Seconds");

        return this;
    }

    public addMinutes(value: number): Dato {
        this.add(value, "Minutes");

        return this;
    }

    public addHours(value: number): Dato {
        this.add(value, "Hours");

        return this;
    }

    public addDays(value: number): Dato {
        this.add(value, "Date");

        return this;
    }

    public addMonths(value: number): Dato {
        this.add(value, "Month");

        return this;
    }

    public addYears(value: number): Dato {
        this.add(value, "FullYear");

        return this;
    }

    public subtractSeconds(value: number): Dato {
        this.subtract(value, "Seconds");

        return this;
    }

    public subtractMinutes(value: number): Dato {
        this.subtract(value, "Minutes");

        return this;
    }

    public subtractHours(value: number): Dato {
        this.subtract(value, "Hours");

        return this;
    }

    public subtractDays(value: number): Dato {
        this.subtract(value, "Date");

        return this;
    }

    public subtractMonths(value: number): Dato {
        this.subtract(value, "Month");

        return this;
    }

    public subtractYears(value: number): Dato {
        this.subtract(value, "FullYear");

        return this;
    }

    public toDate(): Date {
        return this.date;
    }

    public toMilliseconds(): number {
        return this.date.valueOf();
    }

    public toUTC(): string {
        return this.date.toUTCString();
    }

    public toISO(): string {
        return this.date.toISOString();
    }

    public toUnix(): number {
        return +Math.floor(this.date.getTime() / 1000).toFixed(0);
    }

    private add(value: number, unit: string): void {
        this.date[`set${unit}`](+this.date[`get${unit}`]() + value);
    }

    private subtract(value: number, unit: string): void {
        this.date[`set${unit}`](+this.date[`get${unit}`]() - value);
    }

    private ensureUTC(): void {
        this.date = new Date(this.date.toUTCString());
    }

    private castDateTime(value: DateTime): Date {
        if (value instanceof Date) {
            return value;
        }

        if (typeof value === "string") {
            return new Date(Date.parse(value));
        }

        if (typeof value === "number") {
            return new Date(value);
        }

        if (value instanceof Dato) {
            return value.toDate();
        }

        throw new Error(`Expected: string, number, Dato or Date. Received: ${typeof value}.`);
    }
}

export function dato(value?: DateTime): Dato {
    return new Dato(value);
}
