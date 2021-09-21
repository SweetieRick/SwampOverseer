// eslint-disable-next-line import/no-unresolved
import { REST } from '@discordjs/rest';
import { Client, Intents, Collection } from 'discord.js';
// import { fixBoostLevelIndicator, fixContentFilterIndicator, fixVerificationLevelIndicator } from './functions/ServerInfoUtils';
import { SlashRegister } from './slash-put';
import { CommandRegister } from './struct/CommandRegisterIO';

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
client.commands = new Collection();
const cmdRegister = new CommandRegister();
cmdRegister.registerCommandData(client.commands, './commands');

// Loader bus
client.once('ready', () => {
  console.log('Swamp Tester online');
  const rest = new REST({ version: '9' }).setToken((process.env.TOKEN as string));
  const slashmanager = new SlashRegister();
  void slashmanager.registerSlashCommands(rest);
});

// Interaction handler
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  // ! const { commandName } = interaction;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Could not execute the command, please try later', ephemeral: true });
	}
});

// eslint-disable-next-line @typescript-eslint/no-floating-promises
client.login(process.env.TOKEN);

