export class Dato {
    public static now(): Dato {
        return new Dato();
    }

    public static fromString(value: string): Dato {
        return new Dato(Date.parse(value));
    }

    public static fromDate(value: Date): Dato {
        return new Dato(value);
    }

    private date: Date = new Date();

    public constructor(date?: number | Date) {
        if (typeof date === "number") {
            this.date = new Date(date);
        }

        if (date instanceof Date) {
            this.date = date;
        }

        this.ensureUTC();
    }

    public diff(compareTo: number | Date): number {
        if (typeof compareTo === "number") {
            compareTo = new Date(compareTo);
        }

        return Math.abs(compareTo.getTime() - this.date.getTime());
    }

    public diffSeconds(compareTo: number | Date): number {
        return this.diff(compareTo) / 1e3;
    }

    public diffMinutes(compareTo: number | Date): number {
        return this.diffSeconds(compareTo) / 60;
    }

    public isAfter(compareTo: number | Dato | Date): boolean {
        if (compareTo instanceof Dato) {
            compareTo = compareTo.toDate();
        }

        if (typeof compareTo === "number") {
            compareTo = new Date(compareTo);
        }

        return this.date > compareTo;
    }

    public isBefore(compareTo: number | Dato | Date): boolean {
        return !this.isAfter(compareTo);
    }

    public addSeconds(amount: number): Dato {
        this.add(amount, "Seconds");

        return this;
    }

    public addMinutes(amount: number): Dato {
        this.add(amount, "Minutes");

        return this;
    }

    public addHours(amount: number): Dato {
        this.add(amount, "Hours");

        return this;
    }

    public addDays(amount: number): Dato {
        this.add(amount, "Date");

        return this;
    }

    public addMonths(amount: number): Dato {
        this.add(amount, "Month");

        return this;
    }

    public addYears(amount: number): Dato {
        this.add(amount, "FullYear");

        return this;
    }

    public subtractSeconds(amount: number): Dato {
        this.subtract(amount, "Seconds");

        return this;
    }

    public subtractMinutes(amount: number): Dato {
        this.subtract(amount, "Minutes");

        return this;
    }

    public subtractHours(amount: number): Dato {
        this.subtract(amount, "Hours");

        return this;
    }

    public subtractDays(amount: number): Dato {
        this.subtract(amount, "Date");

        return this;
    }

    public subtractMonths(amount: number): Dato {
        this.subtract(amount, "Month");

        return this;
    }

    public subtractYears(amount: number): Dato {
        this.subtract(amount, "FullYear");

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

    private add(amount: number, unit: string): void {
        this.date[`set${unit}`](+this.date[`get${unit}`]() + amount);
    }

    private subtract(amount: number, unit: string): void {
        this.date[`set${unit}`](+this.date[`get${unit}`]() - amount);
    }

    private ensureUTC() {
        this.date = new Date(this.date.toUTCString());
    }
}
