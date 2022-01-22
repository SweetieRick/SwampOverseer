import * as fs from 'fs';
import { Client } from 'discord.js';

// TODO UNUSED
export default async function registerEvents(client: Client, dir: string) {
    const eventFiles = fs.readdirSync(dir).filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const event = require(`${dir}/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.invoke(...args));
        } else {
            client.on(event.name, (...args) => event.invoke(...args));
        }
    }
}