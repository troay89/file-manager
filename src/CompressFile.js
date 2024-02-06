import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import {join} from 'node:path'
import {pipeline} from 'node:stream/promises';

export async function compressFile (path_to_file, path_to_destination) {
    const readStream = createReadStream(join(path_to_file));
    const writeStream = createWriteStream(join(path_to_destination));
    const brotli = createBrotliCompress();

    await pipeline(readStream, brotli, writeStream)
}
