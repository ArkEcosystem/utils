import { hashString } from "./hash-string";
import { indexOf } from "./index-of";

class Dictionary<K, V> {
    private readonly keys: K[] = [];
    private readonly values: V[] = [];

    public get(key: K): V | undefined {
        const index: number = indexOf(this.keys, key);

        return index === -1 ? undefined : this.values[index];

        // for (let i = 0; i < this.keys.length; i++) {
        //     if (this.keys[i] === key) {
        //         return this.values[i];
        //     }
        // }

        // return undefined;
    }

    public set(key: K, value: V): void {
        const index: number = indexOf(this.keys, key);

        if (index === -1) {
            this.keys.push(key);
            this.values.push(value);
        } else {
            this.values[index] = value;
        }

        // this.keys.push(key);
        // this.values.push(value);
    }
}

export class HashTable<K, V> {
    private readonly buckets: Array<Dictionary<K, V>> = [];

    public constructor(private readonly capacity: number = 100000) {
        for (let i = 0; i < this.capacity; i++) {
            this.buckets.push(new Dictionary());
        }
    }

    public get(key: K): V | undefined {
        return this.getBucket(key).get(key);
    }

    public set(key: K, value: V): void {
        this.getBucket(key).set(key, value);
    }

    private getBucketIndex(key: K): number {
        return hashString((key as unknown) as string) % this.capacity;
    }

    private getBucket(key): Dictionary<K, V> {
        return this.buckets[this.getBucketIndex(key)];
    }
}
