import { parse, UrlWithStringQuery } from "url";

import { isUndefined } from "./is-undefined";
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

    if (!parsed.host) {
        throw new Error("Failed to find a host.");
    }

    if (!parsed.path) {
        throw new Error("Failed to find a path.");
    }

    const segments: string[] = parsed.path.split("/").filter(Boolean);

    const owner: string = getOwner(segments[0]);
    const name: string = segments[1].replace(/^\W+|\.git$/g, "");

    const result: { host: string; owner: string; name: string; repo: string; branch: string } = {
        host: parsed.host,
        owner,
        name,
        branch: segments[2],
        repo: owner + "/" + name,
    };

    if (isUndefined(result.branch)) {
        result.branch = parsed.hash ? getBranch(parsed.hash) : "master";
    }

    return result;
};
