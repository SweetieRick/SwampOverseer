import * as fs from 'fs';
import { REST } from '@discordjs/rest';
import { Routes, Snowflake } from 'discord-api-types/v9';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require('dotenv');
dotenv.config();

export default async function registerSlashCommands(dir: string) {
  // ? Pushes the array over to the Discord Application Command endpoint
  try {
    console.log('Started refreshing application (/) commands.');

    const commands: any[] = [];
    const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const command = require(`${dir}/${file}`);
      // commands.push(JSON.stringify(command.data));
      commands.push(command.data.toJSON());
    }

    // TODO Apparently the Discord API doesn't receive the post requests...
    const rest = new REST({ version: '9' }).setToken((process.env.TOKEN as string));
    await rest.put(
      Routes.applicationGuildCommands((process.env.CLIENT_ID as Snowflake), (process.env.GUILD_ID as Snowflake)),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}


/*
import * as fs from 'fs';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const commands: any[] = [];
const commandFiles = fs.readdirSync('src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const command = require(`src/commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken('');

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands('', ''),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
*/