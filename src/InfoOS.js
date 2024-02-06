import {EOL, cpus, homedir, userInfo, arch} from 'node:os';

export function getInfoOS (command) {
    switch (command) {
        case '--EOL': console.log(JSON.stringify(EOL)); break;
        case '--cpus': {
            const cpusList = cpus();
            console.log(`Overall amount of CPUs: ${cpusList.length}`);

            cpusList.forEach((cpu, index) => {
                console.log(`CPU ${index + 1}:`);
                console.log(`Model: ${cpu.model}`);
                console.log(`Speed: ${cpu.speed / 1000} GHz`);
            });
        } break;
        case '--homedir': console.log(homedir()); break;
        case '--username': console.log(userInfo().username); break;
        case '--architecture': console.log(`CPU Architecture: ${arch()}`); break;
        default: console.log('Invalid input'); break;
    }
}
