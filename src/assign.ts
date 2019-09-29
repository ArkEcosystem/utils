export const assign = (target, ...args) => {
    const totalArgs = args.length; // args has to be popped
    let source;
    let i;
    let totalKeys;
    let keys;
    let key;
    let j;

    for (i = 1; i < totalArgs; i++) {
        source = args[i];
        keys = Object.keys(source);
        totalKeys = keys.length;
        for (j = 0; j < totalKeys; j++) {
            key = keys[j];
            target[key] = source[key];
        }
    }
    return target;
};
