import * as fs from 'fs';
import { Collection } from 'discord.js';

export class CommandRegister {
    constructor() {}

    /**
     * Registers all command's data against Discord Slash Command API
     * @param collection ~ Client's collection of commands
     * @param pathDir ~ The path to the commands folder
     * @returns The collection with the new command data in it
     */
    public async registerCommandData(array: Array<any>, dir: string): Promise<any> {
        const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const command = require(`${dir}/${file}`);
            array.push(command.data.toJson());
        }

        console.log(array);
        return array;
    };

    public async registerCommandName(collection: Collection<any, any>, dir: string): Promise<any> {
        const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const command = require(`${dir}/${file}`);
            collection.set(command.data.name, command);
        };

        return collection;
    }
}