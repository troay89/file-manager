const {createHash} = await import('node:crypto');
import {createReadStream} from 'node:fs';
import {join} from 'node:path';
import {pipeline} from 'node:stream/promises';

export async function hashFile(path_to_file) {
    const hash = createHash('sha256');
    const readableStream = createReadStream(join(path_to_file), {encoding: 'utf-8', autoClose: true});
    await pipeline(readableStream, hash);
    console.log(hash.digest('hex'));
}
