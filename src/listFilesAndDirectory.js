import { readdir } from 'node:fs/promises'

function checkItems(list) {
    const arrFolder = [];
    const arrFiles = [];
    list.forEach(item => item.isFile()? arrFiles.push(item): arrFolder.push(item));
    return {folders: arrFolder, files: arrFiles };
}

const sort = list => [...list].sort((a, b) => a.name.localeCompare(b.name));

const createTable = list => list.map(item => item.isDirectory() ? {Name: item.name, Type: 'directory'} : item.isFile() ? {Name: item.name, Type: 'file'} : null);

export async function showFilesAndDirectory(path) {
    const listItems = await readdir(path, {withFileTypes: true});
    const checkItemsList = checkItems(listItems);
    const checkSortFoldersList = sort(checkItemsList.folders);
    const checkSortFilesList = sort(checkItemsList.files);
    const checkSortList = checkSortFoldersList.concat(checkSortFilesList);
    console.table(createTable(checkSortList));
}

