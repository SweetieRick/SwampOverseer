"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@discordjs/rest");
const discord_js_1 = require("discord.js");
const ServerInfoUtils_1 = require("./functions/ServerInfoUtils");
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
client.once('ready', () => {
    console.log('Swamp Tester online');
    const rest = new rest_1.REST({ version: '9' }).setToken(process.env.TOKEN);
    const slashmanager = new slash_put_1.SlashRegister();
    void slashmanager.registerSlashCommands(rest);
});
client.on('interactionCreate', async (interaction) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (!interaction.isCommand())
        return;
    const { commandName } = interaction;
    switch (commandName) {
        case 'ping':
            await interaction.reply(`🏓 Got the ball. Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
            break;
        case 'serverinfo':
            const embed = {
                color: 0xa3ae7e,
                author: {
                    name: `${(_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.name}`,
                    icon_url: `${await ((_b = interaction.guild) === null || _b === void 0 ? void 0 : _b.iconURL())}`,
                },
                description: `${(_c = interaction.guild) === null || _c === void 0 ? void 0 : _c.description}`,
                fields: [
                    {
                        name: 'Owner',
                        value: `The one and the only **<@${(_d = interaction.guild) === null || _d === void 0 ? void 0 : _d.ownerId}>**`,
                        inline: true,
                    },
                    {
                        name: 'Members',
                        value: `${(_e = interaction.guild) === null || _e === void 0 ? void 0 : _e.memberCount}`,
                        inline: true,
                    },
                    {
                        name: '<:boost_heart:841319980078858260> Boost Level',
                        value: `${await (0, ServerInfoUtils_1.fixBoostLevelIndicator)((_f = interaction.guild) === null || _f === void 0 ? void 0 : _f.premiumTier)}`,
                        inline: true,
                    },
                    {
                        name: 'Moderation Level',
                        value: `${await (0, ServerInfoUtils_1.fixVerificationLevelIndicator)((_g = interaction.guild) === null || _g === void 0 ? void 0 : _g.verificationLevel)}\n ${await (0, ServerInfoUtils_1.fixContentFilterIndicator)((_h = interaction.guild) === null || _h === void 0 ? void 0 : _h.explicitContentFilter)}`,
                        inline: true,
                    },
                    {
                        name: 'Server Creation',
                        value: `${(_j = interaction.guild) === null || _j === void 0 ? void 0 : _j.createdAt}`,
                        inline: true,
                    },
                ],
                footer: {
                    name: `${interaction.user.username}`,
                    icon_url: `${interaction.user.displayAvatarURL()}`,
                },
            };
            await interaction.reply({ embeds: [embed] });
    }
});
// eslint-disable-next-line @typescript-eslint/no-floating-promises
client.login(process.env.TOKEN);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBdUM7QUFDdkMsMkNBQTZDO0FBQzdDLGlFQUErSDtBQUMvSCwyQ0FBNEM7QUFFNUMsaUVBQWlFO0FBQ2pFLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxtQkFBTSxDQUFDO0lBQ3RCLE9BQU8sRUFBRTtRQUNMLG9CQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07UUFDcEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVTtRQUN4QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxlQUFlO1FBQzdCLG9CQUFPLENBQUMsS0FBSyxDQUFDLGFBQWE7UUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsY0FBYztRQUM1QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxlQUFlO0tBQ2hDO0NBQ0osQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQWdCLENBQUMsQ0FBQztJQUNoRixNQUFNLFlBQVksR0FBRyxJQUFJLHlCQUFhLEVBQUUsQ0FBQztJQUN6QyxLQUFLLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBQyxFQUFFOztJQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUFFLE9BQU87SUFDckMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLFdBQVcsQ0FBQztJQUVwQyxRQUFRLFdBQVcsRUFBRTtRQUNuQixLQUFLLE1BQU07WUFDVCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsK0JBQStCLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLHNCQUFzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RKLE1BQU07UUFDUixLQUFLLFlBQVk7WUFDZixNQUFNLEtBQUssR0FBRztnQkFDWixLQUFLLEVBQUUsUUFBUTtnQkFDZixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEdBQUcsTUFBQSxXQUFXLENBQUMsS0FBSywwQ0FBRSxJQUFJLEVBQUU7b0JBQ2xDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQSxNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLE9BQU8sRUFBRSxDQUFBLEVBQUU7aUJBQ2xEO2dCQUNELFdBQVcsRUFBRSxHQUFHLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsV0FBVyxFQUFFO2dCQUNoRCxNQUFNLEVBQUU7b0JBQ047d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsS0FBSyxFQUFFLDRCQUE0QixNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLE9BQU8sS0FBSzt3QkFDbEUsTUFBTSxFQUFFLElBQUk7cUJBQ2I7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLEdBQUcsTUFBQSxXQUFXLENBQUMsS0FBSywwQ0FBRSxXQUFXLEVBQUU7d0JBQzFDLE1BQU0sRUFBRSxJQUFJO3FCQUNiO29CQUNEO3dCQUNFLElBQUksRUFBRSwrQ0FBK0M7d0JBQ3JELEtBQUssRUFBRSxHQUFHLE1BQU0sSUFBQSx3Q0FBc0IsRUFBQyxNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLFdBQVcsQ0FBQyxFQUFFO3dCQUN4RSxNQUFNLEVBQUUsSUFBSTtxQkFDYjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixLQUFLLEVBQUUsR0FBRyxNQUFNLElBQUEsK0NBQTZCLEVBQUMsTUFBQSxXQUFXLENBQUMsS0FBSywwQ0FBRSxpQkFBaUIsQ0FBQyxNQUFNLE1BQU0sSUFBQSwyQ0FBeUIsRUFBQyxNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLHFCQUFxQixDQUFDLEVBQUU7d0JBQ3BLLE1BQU0sRUFBRSxJQUFJO3FCQUNiO29CQUNEO3dCQUNFLElBQUksRUFBRSxpQkFBaUI7d0JBQ3ZCLEtBQUssRUFBRSxHQUFHLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsU0FBUyxFQUFFO3dCQUN4QyxNQUFNLEVBQUUsSUFBSTtxQkFDYjtpQkFDRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3BDLFFBQVEsRUFBRSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtpQkFDbkQ7YUFDRixDQUFDO1lBRUYsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxtRUFBbUU7QUFDbkUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVTVCB9IGZyb20gJ0BkaXNjb3JkanMvcmVzdCc7XG5pbXBvcnQgeyBDbGllbnQsIEludGVudHMgfSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB7IGZpeEJvb3N0TGV2ZWxJbmRpY2F0b3IsIGZpeENvbnRlbnRGaWx0ZXJJbmRpY2F0b3IsIGZpeFZlcmlmaWNhdGlvbkxldmVsSW5kaWNhdG9yIH0gZnJvbSAnLi9mdW5jdGlvbnMvU2VydmVySW5mb1V0aWxzJztcbmltcG9ydCB7IFNsYXNoUmVnaXN0ZXIgfSBmcm9tICcuL3NsYXNoLXB1dCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG5jb25zdCBkb3RlbnYgPSByZXF1aXJlKCdkb3RlbnYnKTtcbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gICAgaW50ZW50czogW1xuICAgICAgICBJbnRlbnRzLkZMQUdTLkdVSUxEUyxcbiAgICAgICAgSW50ZW50cy5GTEFHUy5HVUlMRF9CQU5TLFxuICAgICAgICBJbnRlbnRzLkZMQUdTLkRJUkVDVF9NRVNTQUdFUyxcbiAgICAgICAgSW50ZW50cy5GTEFHUy5HVUlMRF9NRU1CRVJTLFxuICAgICAgICBJbnRlbnRzLkZMQUdTLkdVSUxEX01FU1NBR0VTLFxuICAgICAgICBJbnRlbnRzLkZMQUdTLkdVSUxEX1BSRVNFTkNFUyxcbiAgICBdLFxufSk7XG5cbmNsaWVudC5vbmNlKCdyZWFkeScsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1N3YW1wIFRlc3RlciBvbmxpbmUnKTtcbiAgY29uc3QgcmVzdCA9IG5ldyBSRVNUKHsgdmVyc2lvbjogJzknIH0pLnNldFRva2VuKChwcm9jZXNzLmVudi5UT0tFTiBhcyBzdHJpbmcpKTtcbiAgY29uc3Qgc2xhc2htYW5hZ2VyID0gbmV3IFNsYXNoUmVnaXN0ZXIoKTtcbiAgdm9pZCBzbGFzaG1hbmFnZXIucmVnaXN0ZXJTbGFzaENvbW1hbmRzKHJlc3QpO1xufSk7XG5cbmNsaWVudC5vbignaW50ZXJhY3Rpb25DcmVhdGUnLCBhc3luYyBpbnRlcmFjdGlvbiA9PiB7XG4gIGlmICghaW50ZXJhY3Rpb24uaXNDb21tYW5kKCkpIHJldHVybjtcbiAgY29uc3QgeyBjb21tYW5kTmFtZSB9ID0gaW50ZXJhY3Rpb247XG5cbiAgc3dpdGNoIChjb21tYW5kTmFtZSkge1xuICAgIGNhc2UgJ3BpbmcnOlxuICAgICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoYPCfj5MgR290IHRoZSBiYWxsLiBMYXRlbmN5IGlzICR7RGF0ZS5ub3coKSAtIGludGVyYWN0aW9uLmNyZWF0ZWRUaW1lc3RhbXB9bXMuIEFQSSBMYXRlbmN5IGlzICR7TWF0aC5yb3VuZChjbGllbnQud3MucGluZyl9bXNgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NlcnZlcmluZm8nOlxuICAgICAgY29uc3QgZW1iZWQgPSB7XG4gICAgICAgIGNvbG9yOiAweGEzYWU3ZSxcbiAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgbmFtZTogYCR7aW50ZXJhY3Rpb24uZ3VpbGQ/Lm5hbWV9YCxcbiAgICAgICAgICBpY29uX3VybDogYCR7YXdhaXQgaW50ZXJhY3Rpb24uZ3VpbGQ/Lmljb25VUkwoKX1gLFxuICAgICAgICB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogYCR7aW50ZXJhY3Rpb24uZ3VpbGQ/LmRlc2NyaXB0aW9ufWAsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdPd25lcicsXG4gICAgICAgICAgICB2YWx1ZTogYFRoZSBvbmUgYW5kIHRoZSBvbmx5ICoqPEAke2ludGVyYWN0aW9uLmd1aWxkPy5vd25lcklkfT4qKmAsXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTWVtYmVycycsXG4gICAgICAgICAgICB2YWx1ZTogYCR7aW50ZXJhY3Rpb24uZ3VpbGQ/Lm1lbWJlckNvdW50fWAsXG4gICAgICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnPDpib29zdF9oZWFydDo4NDEzMTk5ODAwNzg4NTgyNjA+IEJvb3N0IExldmVsJyxcbiAgICAgICAgICAgIHZhbHVlOiBgJHthd2FpdCBmaXhCb29zdExldmVsSW5kaWNhdG9yKGludGVyYWN0aW9uLmd1aWxkPy5wcmVtaXVtVGllcil9YCxcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdNb2RlcmF0aW9uIExldmVsJyxcbiAgICAgICAgICAgIHZhbHVlOiBgJHthd2FpdCBmaXhWZXJpZmljYXRpb25MZXZlbEluZGljYXRvcihpbnRlcmFjdGlvbi5ndWlsZD8udmVyaWZpY2F0aW9uTGV2ZWwpfVxcbiAke2F3YWl0IGZpeENvbnRlbnRGaWx0ZXJJbmRpY2F0b3IoaW50ZXJhY3Rpb24uZ3VpbGQ/LmV4cGxpY2l0Q29udGVudEZpbHRlcil9YCxcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTZXJ2ZXIgQ3JlYXRpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGAke2ludGVyYWN0aW9uLmd1aWxkPy5jcmVhdGVkQXR9YCxcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICBuYW1lOiBgJHtpbnRlcmFjdGlvbi51c2VyLnVzZXJuYW1lfWAsXG4gICAgICAgICAgaWNvbl91cmw6IGAke2ludGVyYWN0aW9uLnVzZXIuZGlzcGxheUF2YXRhclVSTCgpfWAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7IGVtYmVkczogW2VtYmVkXSB9KTtcbiAgfVxufSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbmNsaWVudC5sb2dpbihwcm9jZXNzLmVudi5UT0tFTik7XG5cbiJdfQ==