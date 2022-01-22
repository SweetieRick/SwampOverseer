"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// eslint-disable-next-line import/no-unresolved
const discord_js_1 = require("discord.js");
// import { fixBoostLevelIndicator, fixContentFilterIndicator, fixVerificationLevelIndicator } from './functions/ServerInfoUtils';
const slash_put_1 = require("./slash-put");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require('dotenv');
dotenv.config();
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_BANS,
        discord_js_1.Intents.FLAGS.DIRECT_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_PRESENCES,
    ],
});
/**
 * A helper runner that registers all commands to later use
 * in command handling
 * @returns The full list of all commands to the default collection
 */
client.commands = new discord_js_1.Collection();
const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const command = require(`${__dirname}/commands/${file}`);
    client.commands.set(command.data.name, command);
}
// >> Loader bus
client.once('ready', async () => {
    var _a;
    console.log(`SwampOverseer is online as ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}`);
    console.log(client.commands);
    await (0, slash_put_1.default)(`${__dirname}/commands`);
});
// >> Interaction handler
client.on('interactionCreate', async (interaction) => {
    // Defualt command existance checks
    if (!interaction.isCommand())
        return;
    const command = client.commands.get(interaction.commandName);
    if (!command)
        return;
    try {
        await command.interact(interaction);
    }
    catch (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBeUI7QUFDekIsZ0RBQWdEO0FBQ2hELDJDQUF5RDtBQUN6RCxrSUFBa0k7QUFDbEksMkNBQWdEO0FBQ2hELGlFQUFpRTtBQUNqRSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sTUFBTSxHQUFHLElBQUksbUJBQU0sQ0FBQztJQUN0QixPQUFPLEVBQUU7UUFDTCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQ3BCLG9CQUFPLENBQUMsS0FBSyxDQUFDLFVBQVU7UUFDeEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTtRQUM3QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxhQUFhO1FBQzNCLG9CQUFPLENBQUMsS0FBSyxDQUFDLGNBQWM7UUFDNUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTtLQUNoQztDQUNKLENBQUMsQ0FBQztBQUVIOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQ25DLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNsRyxLQUFLLE1BQU0sSUFBSSxJQUFJLFlBQVksRUFBRTtJQUNoQyxpRUFBaUU7SUFDakUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsU0FBUyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDaEQ7QUFFRCxnQkFBZ0I7QUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7O0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLE1BQUEsTUFBTSxDQUFDLElBQUksMENBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixNQUFNLElBQUEsbUJBQXFCLEVBQUMsR0FBRyxTQUFTLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQyxDQUFDO0FBRUgseUJBQXlCO0FBQ3pCLE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBQyxFQUFFO0lBQ2pELG1DQUFtQztJQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUFFLE9BQU87SUFDckMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUVyQixJQUFJO1FBQ0osTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3BDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN6RztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7QUFFRixtRUFBbUU7QUFDbkUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgeyBDbGllbnQsIENvbGxlY3Rpb24sIEludGVudHMgfSBmcm9tICdkaXNjb3JkLmpzJztcbi8vIGltcG9ydCB7IGZpeEJvb3N0TGV2ZWxJbmRpY2F0b3IsIGZpeENvbnRlbnRGaWx0ZXJJbmRpY2F0b3IsIGZpeFZlcmlmaWNhdGlvbkxldmVsSW5kaWNhdG9yIH0gZnJvbSAnLi9mdW5jdGlvbnMvU2VydmVySW5mb1V0aWxzJztcbmltcG9ydCByZWdpc3RlclNsYXNoQ29tbWFuZHMgZnJvbSAnLi9zbGFzaC1wdXQnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHtcbiAgICBpbnRlbnRzOiBbXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERTLFxuICAgICAgICBJbnRlbnRzLkZMQUdTLkdVSUxEX0JBTlMsXG4gICAgICAgIEludGVudHMuRkxBR1MuRElSRUNUX01FU1NBR0VTLFxuICAgICAgICBJbnRlbnRzLkZMQUdTLkdVSUxEX01FTUJFUlMsXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERfTUVTU0FHRVMsXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERfUFJFU0VOQ0VTLFxuICAgIF0sXG59KTtcblxuLyoqXG4gKiBBIGhlbHBlciBydW5uZXIgdGhhdCByZWdpc3RlcnMgYWxsIGNvbW1hbmRzIHRvIGxhdGVyIHVzZVxuICogaW4gY29tbWFuZCBoYW5kbGluZ1xuICogQHJldHVybnMgVGhlIGZ1bGwgbGlzdCBvZiBhbGwgY29tbWFuZHMgdG8gdGhlIGRlZmF1bHQgY29sbGVjdGlvblxuICovXG5jbGllbnQuY29tbWFuZHMgPSBuZXcgQ29sbGVjdGlvbigpO1xuY29uc3QgY29tbWFuZEZpbGVzID0gZnMucmVhZGRpclN5bmMoYCR7X19kaXJuYW1lfS9jb21tYW5kc2ApLmZpbHRlcihmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpKTtcbmZvciAoY29uc3QgZmlsZSBvZiBjb21tYW5kRmlsZXMpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcblx0Y29uc3QgY29tbWFuZCA9IHJlcXVpcmUoYCR7X19kaXJuYW1lfS9jb21tYW5kcy8ke2ZpbGV9YCk7XG5cdGNsaWVudC5jb21tYW5kcy5zZXQoY29tbWFuZC5kYXRhLm5hbWUsIGNvbW1hbmQpO1xufVxuXG4vLyA+PiBMb2FkZXIgYnVzXG5jbGllbnQub25jZSgncmVhZHknLCBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTd2FtcE92ZXJzZWVyIGlzIG9ubGluZSBhcyAke2NsaWVudC51c2VyPy50YWd9YCk7XG4gIGNvbnNvbGUubG9nKGNsaWVudC5jb21tYW5kcyk7XG4gIGF3YWl0IHJlZ2lzdGVyU2xhc2hDb21tYW5kcyhgJHtfX2Rpcm5hbWV9L2NvbW1hbmRzYCk7XG59KTtcblxuLy8gPj4gSW50ZXJhY3Rpb24gaGFuZGxlclxuY2xpZW50Lm9uKCdpbnRlcmFjdGlvbkNyZWF0ZScsIGFzeW5jIGludGVyYWN0aW9uID0+IHtcbiAgLy8gRGVmdWFsdCBjb21tYW5kIGV4aXN0YW5jZSBjaGVja3NcbiAgaWYgKCFpbnRlcmFjdGlvbi5pc0NvbW1hbmQoKSkgcmV0dXJuO1xuICBjb25zdCBjb21tYW5kID0gY2xpZW50LmNvbW1hbmRzLmdldChpbnRlcmFjdGlvbi5jb21tYW5kTmFtZSk7XG4gIGlmICghY29tbWFuZCkgcmV0dXJuO1xuXG4gIHRyeSB7XG5cdFx0YXdhaXQgY29tbWFuZC5pbnRlcmFjdChpbnRlcmFjdGlvbik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0YXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoeyBjb250ZW50OiAnQ291bGQgbm90IGV4ZWN1dGUgdGhlIGNvbW1hbmQsIHBsZWFzZSB0cnkgbGF0ZXInLCBlcGhlbWVyYWw6IHRydWUgfSk7XG5cdH1cbn0pO1xuXG4vKlxuY2xpZW50Lm9uKCdtZXNzYWdlQ3JlYXRlJywgYXN5bmMgbWVzc2FnZSA9PiB7XG4gIGlmIChtZXNzYWdlLmF1dGhvci5ib3QpIHJldHVybjtcbiAgaWYgKG1lc3NhZ2UuY29udGVudC5zdGFydHNXaXRoKChwcm9jZXNzLmVudi5QUkVGSVggYXMgc3RyaW5nKSkpIHtcbiAgICBjb25zdCBbY21kTmFtZSwgLi4uY21kQXJnc10gPSBtZXNzYWdlLmNvbnRlbnRcbiAgICAgIC5zbGljZSgocHJvY2Vzcy5lbnYuUFJFRklYIGFzIHN0cmluZykubGVuZ3RoKVxuICAgICAgLnRyaW0oKVxuICAgICAgLnNwbGl0KC9cXHMrLyk7XG4gICAgY29uc3QgY29tbWFuZCA9IGNsaWVudC5jb21tYW5kcy5nZXQoY21kTmFtZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbW1hbmQ/LmV4ZWN1dGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwYXJzZSBjb21tYW5kOicgKyBlKTtcbiAgICB9XG4gIH1cbn0pO1xuKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuY2xpZW50LmxvZ2luKHByb2Nlc3MuZW52LlRPS0VOKTsiXX0=