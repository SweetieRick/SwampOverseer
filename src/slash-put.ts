import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
export class SlashRegister {
  constructor() {}

  /**
   * Registers all slash commands against the Discord API
   * @param rest ~ The REST discord interface that needs to be present on startup
   * @param cmdCollection ~ The array with command file names
   */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public async registerSlashCommands(rest: REST, array: Array<any>): Promise<void> {
    try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(
        Routes.applicationGuildCommands((process.env.CLIENT_ID as string), (process.env.GUILD_ID as string)),
        { body: array },
      );

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  }
}