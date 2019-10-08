export const safeGet = <T>(object, key: any): T | void => {
    if (key === "constructor" && typeof object[key] === "function") {
        return;
    }

    if (key === "__proto__") {
        return;
    }

    return object[key];
};
