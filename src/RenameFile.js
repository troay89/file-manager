import {rename} from 'node:fs/promises'
import {join} from 'node:path'

export async function renameFile(path, oldFile, newFile) {
    await rename(oldFile, join(path, newFile));
}
