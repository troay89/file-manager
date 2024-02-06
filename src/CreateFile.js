import {writeFile, readdir} from 'node:fs/promises'
import {join} from 'node:path'

export async function createFile(path, nameFile) {
    const list = await readdir(path)
    const result = list.find(item => item === nameFile)
    if (!result) {
        console.log(join(path, nameFile))
        await writeFile(join(path, nameFile), '')
    }else {
        throw Error()
    }
}
