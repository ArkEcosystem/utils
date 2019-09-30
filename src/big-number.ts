type BigNumberType = BigInt | number | string | BigNumber;

export class BigNumber {
    public static readonly ZERO: BigNumber = new BigNumber(0);
    public static readonly ONE: BigNumber = new BigNumber(1);
    public static readonly SATOSHI: BigNumber = new BigNumber(1e8);

    private readonly value: bigint;

    public constructor(value: BigNumberType, base: number = 10) {
        this.value = this.toBigNumber(value, base);
    }

    public plus(other: BigNumberType): BigNumber {
        return new BigNumber(this.value + this.toBigNumber(other));
    }

    public minus(other: BigNumberType): BigNumber {
        return new BigNumber(this.value - this.toBigNumber(other));
    }

    public times(other: BigNumberType): BigNumber {
        return new BigNumber(this.value * this.toBigNumber(other));
    }

    public dividedBy(other: BigNumberType): BigNumber {
        return new BigNumber(this.value / this.toBigNumber(other));
    }

    public div(other: BigNumberType): BigNumber {
        return this.dividedBy(other);
    }

    public isZero(): boolean {
        return this.value === BigInt(0);
    }

    public comparedTo(other: BigNumberType): number {
        const b = this.toBigNumber(other);

        if (this.value > b) {
            return 1;
        }

        if (this.value < b) {
            return -1;
        }

        return 0;
    }

    public isLessThan(other: BigNumberType): boolean {
        return this.value < this.toBigNumber(other);
    }

    public isLessThanEqual(other: BigNumberType): boolean {
        return this.value <= this.toBigNumber(other);
    }

    public lt(other: BigNumberType): boolean {
        return this.isLessThan(other);
    }

    public lte(other: BigNumberType): boolean {
        return this.isLessThanEqual(other);
    }

    public isGreaterThan(other: BigNumberType): boolean {
        return this.value > this.toBigNumber(other);
    }

    public isGreaterThanEqual(other: BigNumberType): boolean {
        return this.value >= this.toBigNumber(other);
    }

    public isGreaterThanOrEqualTo(other: BigNumberType): boolean {
        return this.isGreaterThanEqual(other);
    }

    public gt(other: BigNumberType): boolean {
        return this.isGreaterThan(other);
    }

    public gte(other: BigNumberType): boolean {
        return this.isGreaterThanEqual(other);
    }

    public isEqualTo(other: BigNumberType): boolean {
        return this.value === this.toBigNumber(other);
    }

    public isInteger(): boolean {
        return this.value <= Number.MAX_SAFE_INTEGER;
    }

    public isNegative(): boolean {
        return this.value < 0;
    }

    public toFixed(): string {
        return this.value.toString();
    }

    public toJSON(): string {
        return this.toFixed();
    }

    private toBigNumber(value: BigNumberType, base: number = 10): bigint {
        if (value instanceof BigNumber) {
            value = value.value;
        }

        return BigInt(value.toString(base));
    }
}
