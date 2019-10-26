interface URIScheme {
    scheme: string;
    authority: string;
    path: string;
    query: string;
    fragment: string;
}

export const parseURI = (value: string): URIScheme | void => {
    const matches: RegExpExecArray | null = new RegExp(
        "^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?",
    ).exec(value);

    if (!matches) {
        return;
    }

    return {
        scheme: matches[2],
        authority: matches[4],
        path: matches[5],
        query: matches[7],
        fragment: matches[9],
    };
};
