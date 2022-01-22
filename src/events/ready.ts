import { Client } from 'discord.js';
import registerSlashCommands from '../interface/CommandRegister';

module.exports = {
    name: 'ready',
    once: true,
    async invoke(client: Client) {
        console.log(`SwampOverseer is online as ${client.user?.tag}`);
        await registerSlashCommands(client.commands, `${__dirname}/commands`);
    },
};