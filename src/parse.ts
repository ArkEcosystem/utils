import jsonParse from "fast-json-parse";

export const parse = value => {
    const result = jsonParse(value);

    if (result.err) {
        throw new Error(result.err.message);
    }

    return result.value;
};
