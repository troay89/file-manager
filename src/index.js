import {createInterface} from 'node:readline';
import {stdin, stdout, exit, argv, cwd, chdir} from 'node:process';
import {join} from 'node:path';
import {homedir} from 'node:os';
import {showFilesAndDirectory} from "./listFilesAndDirectory.js";

const start = (name) => {
    const rl = createInterface({
        input: stdin,
        output: stdout,
    });
    rl.prompt();
    chdir(join(homedir()));
    console.log(`You are currently in ${cwd()}`);
    rl.on('line', (line) => {
        if (line.trim() === 'up') {
            chdir('..');
        } else if (line.trim().split(' ')[0] === 'cd') {
            try {
                chdir(`${line.trim().split(' ')[1]}`);
            } catch {
                console.log('Operation failed');
            }
        } else if (line.trim() === 'ls') {
            showFilesAndDirectory(cwd());
        } else if (line.trim() === 'close') {
            rl.close();
        } else {
            console.log(`Invalid input`);
        }
        console.log(`You are currently in ${cwd()}`);
        rl.prompt();
    }).on('close', () => {
        console.log(`Thank you for using File Manager, ${name}, goodbye!`);
        exit(0);
    });
}

const args = argv.slice(2);
if (args.length === 1) {
    const dataForEnter = args[0].split('=');
    if (dataForEnter.length === 2 && dataForEnter[0] === '--username' && dataForEnter[1] !== '') {
        const userName = dataForEnter[1];
        console.log(`Welcome to the File Manager, ${userName}!`);
        start(userName);
    } else {
        console.log('Invalid input');
    }

} else {
    console.log('Invalid input');
}



