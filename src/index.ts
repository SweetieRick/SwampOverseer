// eslint-disable-next-line import/no-unresolved
import { REST } from '@discordjs/rest';
import { Client, Intents } from 'discord.js';
// import { fixBoostLevelIndicator, fixContentFilterIndicator, fixVerificationLevelIndicator } from './functions/ServerInfoUtils';
import { SlashRegister } from './slash-put';
import { CommandRegister } from './template/CommandRegister';

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

// Command Register
export const commands: any[] = [];
const cmdRegister = new CommandRegister();

// Loader bus
client.once('ready', async () => {
  console.log(`SwampOverseer is online as ${client.user?.username}#${client.user?.discriminator}`);
  const rest = new REST({ version: '9' }).setToken((process.env.TOKEN as string));
  const slashregister = new SlashRegister();
  void slashregister.registerSlashCommands(rest, await cmdRegister.registerCommandData(commands, './src/commands'));
});

// Interaction handler
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Could not execute the command, please try later', ephemeral: true });
	}
});

/*
client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (message.content.startsWith((process.env.PREFIX as string))) {
    const [cmdName, ...cmdArgs] = message.content
      .slice((process.env.PREFIX as string).length)
      .trim()
      .split(/\s+/);
    const command = client.commands.get(cmdName);
    try {
      command?.execute();
    } catch (e) {
      throw new Error('Could not parse command:' + e);
    }
  }
});
*/

// eslint-disable-next-line @typescript-eslint/no-floating-promises
client.login(process.env.TOKEN);