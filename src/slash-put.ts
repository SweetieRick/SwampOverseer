import * as fs from 'fs';
import { Routes } from 'discord-api-types/v9';

const commands: any[] = [];

const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of cmdFiles) {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
export class SlashRegister {
  constructor() {}

  /**
   * Registers all slash commands against the Discord API
   * @param rest ~ The REST discord interface that needs to be present on startup
   */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  async registerSlashCommands(rest: any): Promise<any> {
    try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(
        Routes.applicationGuildCommands((process.env.CLIENT_ID as string), (process.env.GUILD_ID as string)),
        { body: commands },
      );

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  }
}