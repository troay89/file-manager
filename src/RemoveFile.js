import {rm} from 'node:fs/promises'

export async function removeFile (pathOriginallyFile) {
    await rm(pathOriginallyFile);
}
