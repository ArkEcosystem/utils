import jsonParse from "fast-json-parse";

export const parse = (json: string) => {
    const { err, value } = jsonParse(json);

    if (err) {
        throw new Error(err.message);
    }

    return value;
};
