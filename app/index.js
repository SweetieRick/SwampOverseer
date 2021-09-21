"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-unresolved
const rest_1 = require("@discordjs/rest");
const discord_js_1 = require("discord.js");
// import { fixBoostLevelIndicator, fixContentFilterIndicator, fixVerificationLevelIndicator } from './functions/ServerInfoUtils';
const slash_put_1 = require("./slash-put");
const CommandRegisterIO_1 = require("./struct/CommandRegisterIO");
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
client.commands = new discord_js_1.Collection();
const cmdRegister = new CommandRegisterIO_1.CommandRegister();
cmdRegister.registerCommandData(client.commands, './commands');
// Loader bus
client.once('ready', () => {
    console.log('Swamp Tester online');
    const rest = new rest_1.REST({ version: '9' }).setToken(process.env.TOKEN);
    const slashmanager = new slash_put_1.SlashRegister();
    void slashmanager.registerSlashCommands(rest);
});
// Interaction handler
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand())
        return;
    // ! const { commandName } = interaction;
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
// eslint-disable-next-line @typescript-eslint/no-floating-promises
client.login(process.env.TOKEN);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBZ0Q7QUFDaEQsMENBQXVDO0FBQ3ZDLDJDQUF5RDtBQUN6RCxrSUFBa0k7QUFDbEksMkNBQTRDO0FBQzVDLGtFQUE2RDtBQUU3RCxpRUFBaUU7QUFDakUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixNQUFNLE1BQU0sR0FBRyxJQUFJLG1CQUFNLENBQUM7SUFDdEIsT0FBTyxFQUFFO1FBQ0wsb0JBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUNwQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVO1FBQ3hCLG9CQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7UUFDN0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsYUFBYTtRQUMzQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxjQUFjO1FBQzVCLG9CQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7S0FDaEM7Q0FDSixDQUFDLENBQUM7QUFFSCxtQkFBbUI7QUFDbkIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUNuQyxNQUFNLFdBQVcsR0FBRyxJQUFJLG1DQUFlLEVBQUUsQ0FBQztBQUMxQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUUvRCxhQUFhO0FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQWdCLENBQUMsQ0FBQztJQUNoRixNQUFNLFlBQVksR0FBRyxJQUFJLHlCQUFhLEVBQUUsQ0FBQztJQUN6QyxLQUFLLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMsQ0FBQztBQUVILHNCQUFzQjtBQUN0QixNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEtBQUssRUFBQyxXQUFXLEVBQUMsRUFBRTtJQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUFFLE9BQU87SUFDckMseUNBQXlDO0lBRXpDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RCxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU87SUFFckIsSUFBSTtRQUNKLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNuQztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsaURBQWlELEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7S0FDekc7QUFDRixDQUFDLENBQUMsQ0FBQztBQUVILG1FQUFtRTtBQUNuRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbmltcG9ydCB7IFJFU1QgfSBmcm9tICdAZGlzY29yZGpzL3Jlc3QnO1xuaW1wb3J0IHsgQ2xpZW50LCBJbnRlbnRzLCBDb2xsZWN0aW9uIH0gZnJvbSAnZGlzY29yZC5qcyc7XG4vLyBpbXBvcnQgeyBmaXhCb29zdExldmVsSW5kaWNhdG9yLCBmaXhDb250ZW50RmlsdGVySW5kaWNhdG9yLCBmaXhWZXJpZmljYXRpb25MZXZlbEluZGljYXRvciB9IGZyb20gJy4vZnVuY3Rpb25zL1NlcnZlckluZm9VdGlscyc7XG5pbXBvcnQgeyBTbGFzaFJlZ2lzdGVyIH0gZnJvbSAnLi9zbGFzaC1wdXQnO1xuaW1wb3J0IHsgQ29tbWFuZFJlZ2lzdGVyIH0gZnJvbSAnLi9zdHJ1Y3QvQ29tbWFuZFJlZ2lzdGVySU8nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgIGludGVudHM6IFtcbiAgICAgICAgSW50ZW50cy5GTEFHUy5HVUlMRFMsXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERfQkFOUyxcbiAgICAgICAgSW50ZW50cy5GTEFHUy5ESVJFQ1RfTUVTU0FHRVMsXG4gICAgICAgIEludGVudHMuRkxBR1MuR1VJTERfTUVNQkVSUyxcbiAgICAgICAgSW50ZW50cy5GTEFHUy5HVUlMRF9NRVNTQUdFUyxcbiAgICAgICAgSW50ZW50cy5GTEFHUy5HVUlMRF9QUkVTRU5DRVMsXG4gICAgXSxcbn0pO1xuXG4vLyBDb21tYW5kIFJlZ2lzdGVyXG5jbGllbnQuY29tbWFuZHMgPSBuZXcgQ29sbGVjdGlvbigpO1xuY29uc3QgY21kUmVnaXN0ZXIgPSBuZXcgQ29tbWFuZFJlZ2lzdGVyKCk7XG5jbWRSZWdpc3Rlci5yZWdpc3RlckNvbW1hbmREYXRhKGNsaWVudC5jb21tYW5kcywgJy4vY29tbWFuZHMnKTtcblxuLy8gTG9hZGVyIGJ1c1xuY2xpZW50Lm9uY2UoJ3JlYWR5JywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnU3dhbXAgVGVzdGVyIG9ubGluZScpO1xuICBjb25zdCByZXN0ID0gbmV3IFJFU1QoeyB2ZXJzaW9uOiAnOScgfSkuc2V0VG9rZW4oKHByb2Nlc3MuZW52LlRPS0VOIGFzIHN0cmluZykpO1xuICBjb25zdCBzbGFzaG1hbmFnZXIgPSBuZXcgU2xhc2hSZWdpc3RlcigpO1xuICB2b2lkIHNsYXNobWFuYWdlci5yZWdpc3RlclNsYXNoQ29tbWFuZHMocmVzdCk7XG59KTtcblxuLy8gSW50ZXJhY3Rpb24gaGFuZGxlclxuY2xpZW50Lm9uKCdpbnRlcmFjdGlvbkNyZWF0ZScsIGFzeW5jIGludGVyYWN0aW9uID0+IHtcbiAgaWYgKCFpbnRlcmFjdGlvbi5pc0NvbW1hbmQoKSkgcmV0dXJuO1xuICAvLyAhIGNvbnN0IHsgY29tbWFuZE5hbWUgfSA9IGludGVyYWN0aW9uO1xuXG4gIGNvbnN0IGNvbW1hbmQgPSBjbGllbnQuY29tbWFuZHMuZ2V0KGludGVyYWN0aW9uLmNvbW1hbmROYW1lKTtcbiAgaWYgKCFjb21tYW5kKSByZXR1cm47XG5cbiAgdHJ5IHtcblx0XHRhd2FpdCBjb21tYW5kLmV4ZWN1dGUoaW50ZXJhY3Rpb24pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgY29udGVudDogJ0NvdWxkIG5vdCBleGVjdXRlIHRoZSBjb21tYW5kLCBwbGVhc2UgdHJ5IGxhdGVyJywgZXBoZW1lcmFsOiB0cnVlIH0pO1xuXHR9XG59KTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuY2xpZW50LmxvZ2luKHByb2Nlc3MuZW52LlRPS0VOKTtcblxuIl19