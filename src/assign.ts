export const assign = <T>(target: T, ...args): T => {
    for (let i = 1; i < args.length; i++) {
        const source = args[i];
        const keys = Object.keys(source);
        const totalKeys = keys.length;

        for (let j = 0; j < totalKeys; j++) {
            const key = keys[j];

            target[key] = source[key];
        }
    }

    return target;
};
