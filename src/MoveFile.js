import {rm, access, constants } from 'node:fs/promises'
import {copyFile} from "./CopyFile.js";

export async function moveFile(pathOriginallyFile, pathMoveDirectory) {
    await access(pathOriginallyFile, constants.R_OK | constants.W_OK);
    await copyFile(pathOriginallyFile, pathMoveDirectory)
    await rm(pathOriginallyFile)
}
