"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
// eslint-disable-next-line import/no-unresolved
const rest_1 = require("@discordjs/rest");
const discord_js_1 = require("discord.js");
// import { fixBoostLevelIndicator, fixContentFilterIndicator, fixVerificationLevelIndicator } from './functions/ServerInfoUtils';
const slash_put_1 = require("./slash-put");
const CommandRegister_1 = require("./template/CommandRegister");
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
// Command Register
exports.commands = [];
const cmdRegister = new CommandRegister_1.CommandRegister();
// Loader bus
client.once('ready', async () => {
    var _a, _b;
    console.log(`SwampOverseer is online as ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.username}#${(_b = client.user) === null || _b === void 0 ? void 0 : _b.discriminator}`);
    const rest = new rest_1.REST({ version: '9' }).setToken(process.env.TOKEN);
    const slashregister = new slash_put_1.SlashRegister();
    void slashregister.registerSlashCommands(rest, await cmdRegister.registerCommandData(exports.commands, './src/commands'));
});
// Interaction handler
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand())
        return;
    const command = client.commands.get(interaction.commandName);
    if (!command)
        return;
    try {
        await command.execute(interaction);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBQWdEO0FBQ2hELDBDQUF1QztBQUN2QywyQ0FBNkM7QUFDN0Msa0lBQWtJO0FBQ2xJLDJDQUE0QztBQUM1QyxnRUFBNkQ7QUFFN0QsaUVBQWlFO0FBQ2pFLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxtQkFBTSxDQUFDO0lBQ3RCLE9BQU8sRUFBRTtRQUNMLG9CQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07UUFDcEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVTtRQUN4QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxlQUFlO1FBQzdCLG9CQUFPLENBQUMsS0FBSyxDQUFDLGFBQWE7UUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsY0FBYztRQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxlQUFlO0tBQ2hDO0NBQ0osQ0FBQyxDQUFDO0FBRUgsbUJBQW1CO0FBQ04sUUFBQSxRQUFRLEdBQVUsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sV0FBVyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBRTFDLGFBQWE7QUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTs7SUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsTUFBQSxNQUFNLENBQUMsSUFBSSwwQ0FBRSxRQUFRLElBQUksTUFBQSxNQUFNLENBQUMsSUFBSSwwQ0FBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBZ0IsQ0FBQyxDQUFDO0lBQ2hGLE1BQU0sYUFBYSxHQUFHLElBQUkseUJBQWEsRUFBRSxDQUFDO0lBQzFDLEtBQUssYUFBYSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUNwSCxDQUFDLENBQUMsQ0FBQztBQUVILHNCQUFzQjtBQUN0QixNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEtBQUssRUFBQyxXQUFXLEVBQUMsRUFBRTtJQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUFFLE9BQU87SUFFckMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUVyQixJQUFJO1FBQ0osTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ25DO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN6RztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7QUFFRixtRUFBbUU7QUFDbkUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgeyBSRVNUIH0gZnJvbSAnQGRpc2NvcmRqcy9yZXN0JztcbmltcG9ydCB7IENsaWVudCwgSW50ZW50cyB9IGZyb20gJ2Rpc2NvcmQuanMnO1xuLy8gaW1wb3J0IHsgZml4Qm9vc3RMZXZlbEluZGljYXRvciwgZml4Q29udGVudEZpbHRlckluZGljYXRvciwgZml4VmVyaWZpY2F0aW9uTGV2ZWxJbmRpY2F0b3IgfSBmcm9tICcuL2Z1bmN0aW9ucy9TZXJ2ZXJJbmZvVXRpbHMnO1xuaW1wb3J0IHsgU2xhc2hSZWdpc3RlciB9IGZyb20gJy4vc2xhc2gtcHV0JztcbmltcG9ydCB7IENvbW1hbmRSZWdpc3RlciB9IGZyb20gJy4vdGVtcGxhdGUvQ29tbWFuZFJlZ2lzdGVyJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbmNvbnN0IGRvdGVudiA9IHJlcXVpcmUoJ2RvdGVudicpO1xuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHtcbiAgICBpbnRlbnRzOiBbXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERTLFxuICAgICAgICBJbnRlbnRzLkZMQUdTLkdVSUxEX0JBTlMsXG4gICAgICAgIEludGVudHMuRkxBR1MuRElSRUNUX01FU1NBR0VTLFxuICAgICAgICBJbnRlbnRzLkZMQUdTLkdVSUxEX01FTUJFUlMsXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERfTUVTU0FHRVMsXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERfUFJFU0VOQ0VTLFxuICAgIF0sXG59KTtcblxuLy8gQ29tbWFuZCBSZWdpc3RlclxuZXhwb3J0IGNvbnN0IGNvbW1hbmRzOiBhbnlbXSA9IFtdO1xuY29uc3QgY21kUmVnaXN0ZXIgPSBuZXcgQ29tbWFuZFJlZ2lzdGVyKCk7XG5cbi8vIExvYWRlciBidXNcbmNsaWVudC5vbmNlKCdyZWFkeScsIGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coYFN3YW1wT3ZlcnNlZXIgaXMgb25saW5lIGFzICR7Y2xpZW50LnVzZXI/LnVzZXJuYW1lfSMke2NsaWVudC51c2VyPy5kaXNjcmltaW5hdG9yfWApO1xuICBjb25zdCByZXN0ID0gbmV3IFJFU1QoeyB2ZXJzaW9uOiAnOScgfSkuc2V0VG9rZW4oKHByb2Nlc3MuZW52LlRPS0VOIGFzIHN0cmluZykpO1xuICBjb25zdCBzbGFzaHJlZ2lzdGVyID0gbmV3IFNsYXNoUmVnaXN0ZXIoKTtcbiAgdm9pZCBzbGFzaHJlZ2lzdGVyLnJlZ2lzdGVyU2xhc2hDb21tYW5kcyhyZXN0LCBhd2FpdCBjbWRSZWdpc3Rlci5yZWdpc3RlckNvbW1hbmREYXRhKGNvbW1hbmRzLCAnLi9zcmMvY29tbWFuZHMnKSk7XG59KTtcblxuLy8gSW50ZXJhY3Rpb24gaGFuZGxlclxuY2xpZW50Lm9uKCdpbnRlcmFjdGlvbkNyZWF0ZScsIGFzeW5jIGludGVyYWN0aW9uID0+IHtcbiAgaWYgKCFpbnRlcmFjdGlvbi5pc0NvbW1hbmQoKSkgcmV0dXJuO1xuXG4gIGNvbnN0IGNvbW1hbmQgPSBjbGllbnQuY29tbWFuZHMuZ2V0KGludGVyYWN0aW9uLmNvbW1hbmROYW1lKTtcbiAgaWYgKCFjb21tYW5kKSByZXR1cm47XG5cbiAgdHJ5IHtcblx0XHRhd2FpdCBjb21tYW5kLmV4ZWN1dGUoaW50ZXJhY3Rpb24pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgY29udGVudDogJ0NvdWxkIG5vdCBleGVjdXRlIHRoZSBjb21tYW5kLCBwbGVhc2UgdHJ5IGxhdGVyJywgZXBoZW1lcmFsOiB0cnVlIH0pO1xuXHR9XG59KTtcblxuLypcbmNsaWVudC5vbignbWVzc2FnZUNyZWF0ZScsIGFzeW5jIG1lc3NhZ2UgPT4ge1xuICBpZiAobWVzc2FnZS5hdXRob3IuYm90KSByZXR1cm47XG4gIGlmIChtZXNzYWdlLmNvbnRlbnQuc3RhcnRzV2l0aCgocHJvY2Vzcy5lbnYuUFJFRklYIGFzIHN0cmluZykpKSB7XG4gICAgY29uc3QgW2NtZE5hbWUsIC4uLmNtZEFyZ3NdID0gbWVzc2FnZS5jb250ZW50XG4gICAgICAuc2xpY2UoKHByb2Nlc3MuZW52LlBSRUZJWCBhcyBzdHJpbmcpLmxlbmd0aClcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgvXFxzKy8pO1xuICAgIGNvbnN0IGNvbW1hbmQgPSBjbGllbnQuY29tbWFuZHMuZ2V0KGNtZE5hbWUpO1xuICAgIHRyeSB7XG4gICAgICBjb21tYW5kPy5leGVjdXRlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcGFyc2UgY29tbWFuZDonICsgZSk7XG4gICAgfVxuICB9XG59KTtcbiovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbmNsaWVudC5sb2dpbihwcm9jZXNzLmVudi5UT0tFTik7Il19