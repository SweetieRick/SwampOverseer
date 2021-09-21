"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashRegister = void 0;
const fs = require("fs");
const v9_1 = require("discord-api-types/v9");
const commands = [];
const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of cmdFiles) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
class SlashRegister {
    constructor() { }
    /**
     * Registers all slash commands against the Discord API
     * @param rest ~ The REST discord interface that needs to be present on startup
     */
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async registerSlashCommands(rest) {
        try {
            console.log('Started refreshing application (/) commands.');
            await rest.put(v9_1.Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });
            console.log('Successfully reloaded application (/) commands.');
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.SlashRegister = SlashRegister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhc2gtcHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NsYXNoLXB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBeUI7QUFDekIsNkNBQThDO0FBRTlDLE1BQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQztBQUUzQixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNuRixLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsRUFBRTtJQUM1QixpRUFBaUU7SUFDakUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztDQUNyQztBQUVELG1FQUFtRTtBQUNuRSxNQUFhLGFBQWE7SUFDeEIsZ0JBQWUsQ0FBQztJQUVoQjs7O09BR0c7SUFDSCw4REFBOEQ7SUFDOUQsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQVM7UUFDbkMsSUFBSTtZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztZQUU1RCxNQUFNLElBQUksQ0FBQyxHQUFHLENBQ1osV0FBTSxDQUFDLHdCQUF3QixDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBb0IsRUFBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQW1CLENBQUMsRUFDcEcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQ25CLENBQUM7WUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7U0FDaEU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0NBQ0Y7QUF0QkQsc0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnZGlzY29yZC1hcGktdHlwZXMvdjknO1xuXG5jb25zdCBjb21tYW5kczogYW55W10gPSBbXTtcblxuY29uc3QgY21kRmlsZXMgPSBmcy5yZWFkZGlyU3luYygnLi9jb21tYW5kcycpLmZpbHRlcihmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpKTtcbmZvciAoY29uc3QgZmlsZSBvZiBjbWRGaWxlcykge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuXHRjb25zdCBjb21tYW5kID0gcmVxdWlyZShgLi9jb21tYW5kcy8ke2ZpbGV9YCk7XG5cdGNvbW1hbmRzLnB1c2goY29tbWFuZC5kYXRhLnRvSlNPTigpKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuZXhwb3J0IGNsYXNzIFNsYXNoUmVnaXN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbGwgc2xhc2ggY29tbWFuZHMgYWdhaW5zdCB0aGUgRGlzY29yZCBBUElcbiAgICogQHBhcmFtIHJlc3QgfiBUaGUgUkVTVCBkaXNjb3JkIGludGVyZmFjZSB0aGF0IG5lZWRzIHRvIGJlIHByZXNlbnQgb24gc3RhcnR1cFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgYXN5bmMgcmVnaXN0ZXJTbGFzaENvbW1hbmRzKHJlc3Q6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdTdGFydGVkIHJlZnJlc2hpbmcgYXBwbGljYXRpb24gKC8pIGNvbW1hbmRzLicpO1xuXG4gICAgICBhd2FpdCByZXN0LnB1dChcbiAgICAgICAgUm91dGVzLmFwcGxpY2F0aW9uR3VpbGRDb21tYW5kcygocHJvY2Vzcy5lbnYuQ0xJRU5UX0lEIGFzIHN0cmluZyksIChwcm9jZXNzLmVudi5HVUlMRF9JRCBhcyBzdHJpbmcpKSxcbiAgICAgICAgeyBib2R5OiBjb21tYW5kcyB9LFxuICAgICAgKTtcblxuICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSByZWxvYWRlZCBhcHBsaWNhdGlvbiAoLykgY29tbWFuZHMuJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufSJdfQ==