import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress, createBrotliDecompress } from "zlib";

export const brotli = {
    compress: (source: string, dest: string) =>
        createReadStream(source)
            .pipe(createBrotliCompress())
            .pipe(createWriteStream(dest)),
    decompress: (source: string, dest: string) =>
        createReadStream(source)
            .pipe(createBrotliDecompress())
            .pipe(createWriteStream(dest)),
};
