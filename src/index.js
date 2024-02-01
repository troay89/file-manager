import {createInterface} from 'node:readline';
import {stdin, stdout, exit, argv} from 'node:process';

const start = (name) => {
    const rl = createInterface({
        input: stdin,
        output: stdout,
    });

    rl.prompt();

    rl.on('line', (line) => {
        switch (line.trim()) {
            case 'hello':
                console.log('world!');
                break;
            case 'close':
                rl.close();
                break;
            default:
                console.log(`Say what? I might have heard '${line.trim()}'`);
                break;
        }
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
        console.log('You entered the wrong command to enter applications. Try again!');
    }

} else {
    console.log('You entered the wrong command to enter applications. Try again!');
}



