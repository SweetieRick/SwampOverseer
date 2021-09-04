import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const commands = [{
  name: 'ping',
  description: 'Replies with Pong!',
}];

const rest = new REST({ version: '9' }).setToken((process.env.TOKEN as string));

void (async () => {
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
})();