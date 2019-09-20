import { clone } from "./clone";

export const shuffle = <T>(iterable: T[]): T[] => {
    const shuffledValues: T[] = clone(iterable);

    for (let i = 0; i < shuffledValues.length; i++) {
        const rand: number = Math.floor(Math.random() * (i + 1));
        const value: T = shuffledValues[i];

        shuffledValues[i] = shuffledValues[rand];
        shuffledValues[rand] = value;
    }

    return shuffledValues;
};
