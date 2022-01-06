import * as fs from 'fs';

export class CommandRegister {
    constructor() {}

    /**
     * Registers all command's data against Discord Slash Command API
     * @param collection ~ Client's collection of commands
     * @param pathDir ~ The path to the commands folder
     * @returns The collection with the new command data in it
     */
    public async registerCommandData(collection: Array<any>, dir: string): Promise<any> {
        const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const command = require(`${dir}/${file}`);
            collection.push(command.data.toJson());
            return collection;
        }

        // TODO Adding a return statement here does work... however the array will be left empty
        // TODO and the API error would be the same as an invalid Array content type error (50035, 400)
        // return collection;
    }
}