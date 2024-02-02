import {createReadStream} from 'node:fs'
import {stdout} from 'node:process';

export function readFile(path) {
    return new Promise((resolve, reject) => {
        const readableStream = createReadStream(path, {
            encoding: 'utf-8',
            autoClose: true
        });
        readableStream.on('data', (chunk) => {
            stdout.write(chunk);
        });

        readableStream.on('end', () => {
            stdout.write('\n');
            resolve();
        });

        readableStream.on('error', (err) => {
            reject(err);
        });
    });
}
