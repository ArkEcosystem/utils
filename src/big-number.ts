import JSBI from 'jsbi';

type BigNumberType = BigInt | number | string | BigNumber | JSBI;

export class BigNumber {
    public static readonly ZERO: BigNumber = new BigNumber(0);
    public static readonly ONE: BigNumber = new BigNumber(1);
    public static readonly SATOSHI: BigNumber = new BigNumber(1e8);

    private readonly value: JSBI;

    public constructor(value: BigNumberType) {
        this.value = this.toBigNumber(value);
    }

    public static make(value: BigNumberType): BigNumber {
        return new BigNumber(value);
    }

    public plus(other: BigNumberType): BigNumber {
        return new BigNumber(JSBI.add(this.value, this.toBigNumber(other)));
    }

    public minus(other: BigNumberType): BigNumber {
        return new BigNumber(JSBI.subtract(this.value, this.toBigNumber(other)));
    }

    public times(other: BigNumberType): BigNumber {
        return new BigNumber(JSBI.multiply(this.value, this.toBigNumber(other)));
    }

    public dividedBy(other: BigNumberType): BigNumber {
        return new BigNumber(JSBI.divide(this.value, this.toBigNumber(other)));
    }

    public div(other: BigNumberType): BigNumber {
        return this.dividedBy(other);
    }

    public isZero(): boolean {
        return JSBI.equal(this.value, JSBI.BigInt(0));
    }

    public comparedTo(other: BigNumberType): number {
        const b = this.toBigNumber(other);

        if (JSBI.greaterThan(this.value, b)) {
            return 1;
        }

        if (JSBI.lessThan(this.value, b)) {
            return -1;
        }

        return 0;
    }

    public isLessThan(other: BigNumberType): boolean {
        return JSBI.lessThan(this.value, this.toBigNumber(other));
    }

    public isLessThanEqual(other: BigNumberType): boolean {
        return JSBI.lessThanOrEqual(this.value, this.toBigNumber(other));
    }

    public isGreaterThan(other: BigNumberType): boolean {
        return JSBI.greaterThan(this.value, this.toBigNumber(other));
    }

    public isGreaterThanEqual(other: BigNumberType): boolean {
        return JSBI.greaterThanOrEqual(this.value, this.toBigNumber(other));
    }

    public isEqualTo(other: BigNumberType): boolean {
        return JSBI.equal(this.value, this.toBigNumber(other));
    }

    public isNegative(): boolean {
        return JSBI.lessThan(this.value, JSBI.BigInt(0));
    }

    public toFixed(): string {
        return JSBI.BigInt(this.value).toString();
    }

    public toString(base: number = 10): string {
        return JSBI.BigInt(this.value).toString(base);
    }

    public toJSON(): string {
        return this.toFixed();
    }

    private toBigNumber(value: BigNumberType): JSBI {
        if (value instanceof BigNumber) {
            value = value.value;
        }

        return JSBI.BigInt(value);
    }
}
