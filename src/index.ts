import { Client, Intents } from 'discord.js';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES,
    ],
});

client.once('ready', () => {
  console.log('Swamp Tester online');
});

void client.login(process.env.TOKEN);

