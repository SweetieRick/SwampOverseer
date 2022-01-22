// eslint-disable-next-line import/no-unresolved
import { Client, Collection, Intents } from 'discord.js';
// import { fixBoostLevelIndicator, fixContentFilterIndicator, fixVerificationLevelIndicator } from './functions/ServerInfoUtils';
import registerSlashCommands from './interface/CommandRegister';
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


client.commands = new Collection();

// >> Loader bus
client.once('ready', async () => {
  console.log(`SwampOverseer is online as ${client.user?.tag}`);
  await registerSlashCommands(client.commands, `${__dirname}/commands`);
});

// >> Interaction handler
client.on('interactionCreate', async interaction => {
  // Defualt command existance checks
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;

  try {
		await command.interact(interaction, client);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Could not execute the command, please try later', ephemeral: true });
	}
});

/*
// >> Message handler
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