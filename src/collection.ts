import stringify from "fast-safe-stringify";
import { get } from "./get";
import { has } from "./has";
import { sample } from "./sample";
import { set } from "./set";
import { unset } from "./unset";

export class Collection<T> {
    private collection: Record<string, T> = {};

    public all(): Record<string, T> {
        return this.collection;
    }

    public entries(): Array<[string, T]> {
        return Object.entries(this.collection);
    }

    public keys(): string[] {
        return Object.keys(this.collection);
    }

    public values(): T[] {
        return Object.values(this.collection);
    }

    public pull(key: string): T {
        const item = get<T>(this.collection, key);

        this.forget(key);

        return item;
    }

    public get(key: string): T {
        return get<T>(this.collection, key);
    }

    public set(key: string, value: T): void {
        set(this.collection, key, value);
    }

    public forget(key: string): void {
        unset(this.collection, key);
    }

    public flush(): void {
        this.collection = {};
    }

    public has(key: string): boolean {
        return !!this.get(key);
    }

    public missing(key: string): boolean {
        return !this.has(key);
    }

    public count(): number {
        return Object.keys(this.collection).length;
    }

    public isEmpty(): boolean {
        return this.count() <= 0;
    }

    public isNotEmpty(): boolean {
        return !this.isEmpty();
    }

    public random(): T {
        return sample(this.values());
    }

    public toJson(): string {
        const collection: Record<string, T> = {};

        for (const [key, value] of this.entries()) {
            collection[key] = value;
        }

        return stringify(collection);
    }
}