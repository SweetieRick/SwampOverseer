import * as fs from 'fs';
import Collection from '@discordjs/collection';
import { REST } from '@discordjs/rest';
import { Routes, Snowflake } from 'discord-api-types/v9';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require('dotenv');
dotenv.config();

export default async function registerSlashCommands(collection: Collection<any, any>, dir: string) {
  // ? Pushes the array over to the Discord Application Command endpoint
  try {
    console.log('Started refreshing application (/) commands.');

    const commands: any[] = [];
    const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
	    // eslint-disable-next-line @typescript-eslint/no-require-imports
	    const command = require(`${dir}/${file}`);
      try {
        collection.set(command.data.name, command);
        commands.push(command.data.toJSON());
      } catch (e: any) {
        throw new Error(e);
      }
    }

    // TODO Apparently the Discord API doesn't receive the post requests...
    const rest = new REST({ version: '9' }).setToken((process.env.TOKEN as string));
    await rest.put(
      Routes.applicationGuildCommands((process.env.CLIENT_ID as Snowflake), (process.env.GUILD_ID as Snowflake)),
      { body: commands },
    );

    console.log('Started refreshing application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}