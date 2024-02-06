import { readdir } from 'node:fs/promises'

function checkItems(list) {
    const arrFolder = [];
    const arrFiles = [];
    list.forEach(item => item.isFile()? arrFiles.push(item): arrFolder.push(item));
    return {folders: arrFolder, files: arrFiles };
}

const sort = list => [...list].sort((a, b) => a.name.localeCompare(b.name));

function createTable  (list)  {
    const result = [];
    for(const item of list) {
        if (item.isDirectory()) {
            result.push({Name: item.name, Type: 'directory'});
        } else if (item.isFile()) {
            result.push({Name: item.name, Type: 'file'});
        }
    }
    return result;
}

export async function showFilesAndDirectory(path) {
    const listItems = await readdir(path, {withFileTypes: true});
    const checkItemsList = checkItems(listItems);
    const checkSortFoldersList = sort(checkItemsList.folders);
    const checkSortFilesList = sort(checkItemsList.files);
    const checkSortList = checkSortFoldersList.concat(checkSortFilesList);
    console.table(createTable(checkSortList));
}

