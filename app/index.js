"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-unresolved
const discord_js_1 = require("discord.js");
// import { fixBoostLevelIndicator, fixContentFilterIndicator, fixVerificationLevelIndicator } from './functions/ServerInfoUtils';
const CommandRegister_1 = require("./interface/CommandRegister");
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
client.commands = new discord_js_1.Collection();
// >> Loader bus
client.once('ready', async () => {
    var _a;
    console.log(`SwampOverseer is online as ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}`);
    await (0, CommandRegister_1.default)(client.commands, `${__dirname}/commands`);
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
        await command.interact(interaction, client);
    }
    catch (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBZ0Q7QUFDaEQsMkNBQXlEO0FBQ3pELGtJQUFrSTtBQUNsSSxpRUFBZ0U7QUFDaEUsaUVBQWlFO0FBQ2pFLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxtQkFBTSxDQUFDO0lBQ3RCLE9BQU8sRUFBRTtRQUNMLG9CQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07UUFDcEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVTtRQUN4QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxlQUFlO1FBQzdCLG9CQUFPLENBQUMsS0FBSyxDQUFDLGFBQWE7UUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsY0FBYztRQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxlQUFlO0tBQ2hDO0NBQ0osQ0FBQyxDQUFDO0FBR0gsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUVuQyxnQkFBZ0I7QUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7O0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLE1BQUEsTUFBTSxDQUFDLElBQUksMENBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5RCxNQUFNLElBQUEseUJBQXFCLEVBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDLENBQUM7QUFFSCx5QkFBeUI7QUFDekIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEVBQUMsV0FBVyxFQUFDLEVBQUU7SUFDakQsbUNBQW1DO0lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1FBQUUsT0FBTztJQUNyQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0QsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFPO0lBRXJCLElBQUk7UUFDSixNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzVDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN6RztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUJFO0FBRUYsbUVBQW1FO0FBQ25FLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IHsgQ2xpZW50LCBDb2xsZWN0aW9uLCBJbnRlbnRzIH0gZnJvbSAnZGlzY29yZC5qcyc7XG4vLyBpbXBvcnQgeyBmaXhCb29zdExldmVsSW5kaWNhdG9yLCBmaXhDb250ZW50RmlsdGVySW5kaWNhdG9yLCBmaXhWZXJpZmljYXRpb25MZXZlbEluZGljYXRvciB9IGZyb20gJy4vZnVuY3Rpb25zL1NlcnZlckluZm9VdGlscyc7XG5pbXBvcnQgcmVnaXN0ZXJTbGFzaENvbW1hbmRzIGZyb20gJy4vaW50ZXJmYWNlL0NvbW1hbmRSZWdpc3Rlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgIGludGVudHM6IFtcbiAgICAgICAgSW50ZW50cy5GTEFHUy5HVUlMRFMsXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERfQkFOUyxcbiAgICAgICAgSW50ZW50cy5GTEFHUy5ESVJFQ1RfTUVTU0FHRVMsXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERfTUVNQkVSUyxcbiAgICAgICAgSW50ZW50cy5GTEFHUy5HVUlMRF9NRVNTQUdFUyxcbiAgICAgICAgSW50ZW50cy5GTEFHUy5HVUlMRF9QUkVTRU5DRVMsXG4gICAgXSxcbn0pO1xuXG5cbmNsaWVudC5jb21tYW5kcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG5cbi8vID4+IExvYWRlciBidXNcbmNsaWVudC5vbmNlKCdyZWFkeScsIGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coYFN3YW1wT3ZlcnNlZXIgaXMgb25saW5lIGFzICR7Y2xpZW50LnVzZXI/LnRhZ31gKTtcbiAgYXdhaXQgcmVnaXN0ZXJTbGFzaENvbW1hbmRzKGNsaWVudC5jb21tYW5kcywgYCR7X19kaXJuYW1lfS9jb21tYW5kc2ApO1xufSk7XG5cbi8vID4+IEludGVyYWN0aW9uIGhhbmRsZXJcbmNsaWVudC5vbignaW50ZXJhY3Rpb25DcmVhdGUnLCBhc3luYyBpbnRlcmFjdGlvbiA9PiB7XG4gIC8vIERlZnVhbHQgY29tbWFuZCBleGlzdGFuY2UgY2hlY2tzXG4gIGlmICghaW50ZXJhY3Rpb24uaXNDb21tYW5kKCkpIHJldHVybjtcbiAgY29uc3QgY29tbWFuZCA9IGNsaWVudC5jb21tYW5kcy5nZXQoaW50ZXJhY3Rpb24uY29tbWFuZE5hbWUpO1xuICBpZiAoIWNvbW1hbmQpIHJldHVybjtcblxuICB0cnkge1xuXHRcdGF3YWl0IGNvbW1hbmQuaW50ZXJhY3QoaW50ZXJhY3Rpb24sIGNsaWVudCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0YXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoeyBjb250ZW50OiAnQ291bGQgbm90IGV4ZWN1dGUgdGhlIGNvbW1hbmQsIHBsZWFzZSB0cnkgbGF0ZXInLCBlcGhlbWVyYWw6IHRydWUgfSk7XG5cdH1cbn0pO1xuXG4vKlxuLy8gPj4gTWVzc2FnZSBoYW5kbGVyXG5jbGllbnQub24oJ21lc3NhZ2VDcmVhdGUnLCBhc3luYyBtZXNzYWdlID0+IHtcbiAgaWYgKG1lc3NhZ2UuYXV0aG9yLmJvdCkgcmV0dXJuO1xuICBpZiAobWVzc2FnZS5jb250ZW50LnN0YXJ0c1dpdGgoKHByb2Nlc3MuZW52LlBSRUZJWCBhcyBzdHJpbmcpKSkge1xuICAgIGNvbnN0IFtjbWROYW1lLCAuLi5jbWRBcmdzXSA9IG1lc3NhZ2UuY29udGVudFxuICAgICAgLnNsaWNlKChwcm9jZXNzLmVudi5QUkVGSVggYXMgc3RyaW5nKS5sZW5ndGgpXG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoL1xccysvKTtcbiAgICBjb25zdCBjb21tYW5kID0gY2xpZW50LmNvbW1hbmRzLmdldChjbWROYW1lKTtcbiAgICB0cnkge1xuICAgICAgY29tbWFuZD8uZXhlY3V0ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHBhcnNlIGNvbW1hbmQ6JyArIGUpO1xuICAgIH1cbiAgfVxufSk7XG4qL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG5jbGllbnQubG9naW4ocHJvY2Vzcy5lbnYuVE9LRU4pOyJdfQ==