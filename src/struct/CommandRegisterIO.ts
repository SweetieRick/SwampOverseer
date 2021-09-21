import * as fs from 'fs';

export class CommandRegister {
    constructor() {}

    /**
     * Registers all command's data against Discord Slash Command API
     * @param collection ~ Client's collection of commands
     * @param pathDir ~ The path to the commands folder
     * @returns The collection with the new command data in it
     */
    public registerCommandData(collection: any, pathDir: string): any {
        const cmdFileData = fs.readdirSync(pathDir).filter(file => file.endsWith('.js'));

        for (const file of cmdFileData) {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const command = require(`${pathDir}/${file}`);
            return collection.set(command.data.name, command);
        }
    }
}