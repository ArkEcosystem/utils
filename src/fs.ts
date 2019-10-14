import {
    createReadStream,
    createWriteStream,
    existsSync,
    lstatSync,
    mkdirSync,
    readFileSync,
    renameSync,
    rmdirSync,
    Stats,
    unlinkSync,
    writeFileSync,
} from "fs";

import { parse } from "./parse";
import { stringify } from "./stringify";

export const fs = {
    isDirectory: (path: string): boolean => lstatSync(path).isDirectory(),
    isFile: (path: string): boolean => lstatSync(path).isFile(),
    copySync: (from: string, to: string): void => {
        if (lstatSync(from).isDirectory()) {
            //
        } else if (lstatSync(from).isFile()) {
            createReadStream(from).pipe(createWriteStream(to));
        }
    },
    ensureDirSync: (value: string): void => {
        if (!existsSync(value)) {
            mkdirSync(value);
        }
    },
    ensureFileSync: (value: string): void => {
        if (!existsSync(value)) {
            writeFileSync(value, "");
        }
    },
    moveSync: (from: string, to: string): void => renameSync(from, to),
    readJSONSync: (file: string): void => parse(readFileSync(file).toString()),
    removeSync: (path: string): void => {
        const stats: Stats = lstatSync(path);

        if (stats.isDirectory()) {
            return rmdirSync(path);
        }

        return unlinkSync(path);
    },
    writeJSONSync: (file: string, contents: string): void => writeFileSync(file, stringify(contents)),
};
