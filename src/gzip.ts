import { createReadStream, createWriteStream, WriteStream, PathLike } from "fs";
import { createGzip, createGunzip } from "zlib";

export const gzip = {
    compress: (source: PathLike, dest: PathLike): WriteStream =>
        createReadStream(source)
            .pipe(createGzip())
            .pipe(createWriteStream(dest)),
    decompress: (source: PathLike, dest: PathLike): WriteStream =>
        createReadStream(source)
            .pipe(createGunzip())
            .pipe(createWriteStream(dest)),
};
