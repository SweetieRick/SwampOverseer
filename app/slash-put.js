"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashRegister = void 0;
const v9_1 = require("discord-api-types/v9");
const commands = [{
        name: 'ping',
        description: '🏓 Got the ball',
    },
    {
        name: 'serverinfo',
        description: 'Gets server info',
    }];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhc2gtcHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NsYXNoLXB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBOEM7QUFFOUMsTUFBTSxRQUFRLEdBQUcsQ0FBQztRQUNoQixJQUFJLEVBQUUsTUFBTTtRQUNaLFdBQVcsRUFBRSxpQkFBaUI7S0FDL0I7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLFdBQVcsRUFBRSxrQkFBa0I7S0FDaEMsQ0FBQyxDQUFDO0FBRUgsbUVBQW1FO0FBQ25FLE1BQWEsYUFBYTtJQUN4QixnQkFBZSxDQUFDO0lBRWhCOzs7T0FHRztJQUNILDhEQUE4RDtJQUM5RCxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBUztRQUNuQyxJQUFJO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBRTVELE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FDWixXQUFNLENBQUMsd0JBQXdCLENBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFvQixFQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBbUIsQ0FBQyxFQUNwRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FDbkIsQ0FBQztZQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUNoRTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Q0FDRjtBQXRCRCxzQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdkaXNjb3JkLWFwaS10eXBlcy92OSc7XG5cbmNvbnN0IGNvbW1hbmRzID0gW3tcbiAgbmFtZTogJ3BpbmcnLFxuICBkZXNjcmlwdGlvbjogJ/Cfj5MgR290IHRoZSBiYWxsJyxcbn0sXG57XG4gIG5hbWU6ICdzZXJ2ZXJpbmZvJyxcbiAgZGVzY3JpcHRpb246ICdHZXRzIHNlcnZlciBpbmZvJyxcbn1dO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG5leHBvcnQgY2xhc3MgU2xhc2hSZWdpc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFsbCBzbGFzaCBjb21tYW5kcyBhZ2FpbnN0IHRoZSBEaXNjb3JkIEFQSVxuICAgKiBAcGFyYW0gcmVzdCB+IFRoZSBSRVNUIGRpc2NvcmQgaW50ZXJmYWNlIHRoYXQgbmVlZHMgdG8gYmUgcHJlc2VudCBvbiBzdGFydHVwXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xuICBhc3luYyByZWdpc3RlclNsYXNoQ29tbWFuZHMocmVzdDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ1N0YXJ0ZWQgcmVmcmVzaGluZyBhcHBsaWNhdGlvbiAoLykgY29tbWFuZHMuJyk7XG5cbiAgICAgIGF3YWl0IHJlc3QucHV0KFxuICAgICAgICBSb3V0ZXMuYXBwbGljYXRpb25HdWlsZENvbW1hbmRzKChwcm9jZXNzLmVudi5DTElFTlRfSUQgYXMgc3RyaW5nKSwgKHByb2Nlc3MuZW52LkdVSUxEX0lEIGFzIHN0cmluZykpLFxuICAgICAgICB7IGJvZHk6IGNvbW1hbmRzIH0sXG4gICAgICApO1xuXG4gICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IHJlbG9hZGVkIGFwcGxpY2F0aW9uICgvKSBjb21tYW5kcy4nKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59Il19