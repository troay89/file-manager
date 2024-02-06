import {createReadStream, createWriteStream} from 'node:fs'
import { basename, join } from 'node:path';
import {pipeline} from 'node:stream/promises';

export async function copyFile(pathOriginallyFile, pathCopyDirectory) {
    const nameFile = basename(pathOriginallyFile);
    const readableStream = createReadStream(pathOriginallyFile, {encoding: 'utf-8', autoClose: true});
    const WritableStream = createWriteStream(join(pathCopyDirectory, nameFile), {encoding: 'utf-8', autoClose: true});
    await pipeline(readableStream, WritableStream);
}
