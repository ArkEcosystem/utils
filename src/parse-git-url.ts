import { parse, UrlWithStringQuery } from "url";

import { last } from "./last";

const getBranch = (hash: string): string => (hash && hash.startsWith("#") ? last(hash.split("#")) : "master");

const getOwner = (value: string): string => {
    const string: number = value.indexOf(":");

    return string > -1 ? value.slice(string + 1) : value;
};

export const parseGitUrl = (
    value: string,
): { host: string; owner: string; name: string; repo: string; branch: string } => {
    const parsed: UrlWithStringQuery = parse(value);

    if (value.startsWith("git@")) {
        parsed.host = parse("https://" + value).host;
    }

    const segments: string[] = parsed.path.split("/").filter(Boolean);

    const owner: string = getOwner(segments[0]);
    const name: string = segments[1].replace(/^\W+|\.git$/g, "");

    return {
        host: parsed.host,
        owner,
        name,
        branch: segments[2] || getBranch(parsed.hash),
        repo: owner + "/" + name,
    };
};
