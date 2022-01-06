"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashRegister = void 0;
const v9_1 = require("discord-api-types/v9");
// eslint-disable-next-line @typescript-eslint/no-floating-promises
class SlashRegister {
    constructor() { }
    /**
     * Registers all slash commands against the Discord API
     * @param rest ~ The REST discord interface that needs to be present on startup
     * @param cmdCollection ~ The array with command file names
     */
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async registerSlashCommands(rest, array) {
        try {
            console.log('Started refreshing application (/) commands.');
            await rest.put(v9_1.Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: array });
            console.log('Successfully reloaded application (/) commands.');
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.SlashRegister = SlashRegister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhc2gtcHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NsYXNoLXB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2Q0FBOEM7QUFFOUMsbUVBQW1FO0FBQ25FLE1BQWEsYUFBYTtJQUN4QixnQkFBZSxDQUFDO0lBRWhCOzs7O09BSUc7SUFDSCw4REFBOEQ7SUFDdkQsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQVUsRUFBRSxLQUFpQjtRQUM5RCxJQUFJO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBRTVELE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FDWixXQUFNLENBQUMsd0JBQXdCLENBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFvQixFQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBbUIsQ0FBQyxFQUNwRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FDaEIsQ0FBQztZQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUNoRTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Q0FDRjtBQXZCRCxzQ0F1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRVNUIH0gZnJvbSAnQGRpc2NvcmRqcy9yZXN0JztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ2Rpc2NvcmQtYXBpLXR5cGVzL3Y5JztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuZXhwb3J0IGNsYXNzIFNsYXNoUmVnaXN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbGwgc2xhc2ggY29tbWFuZHMgYWdhaW5zdCB0aGUgRGlzY29yZCBBUElcbiAgICogQHBhcmFtIHJlc3QgfiBUaGUgUkVTVCBkaXNjb3JkIGludGVyZmFjZSB0aGF0IG5lZWRzIHRvIGJlIHByZXNlbnQgb24gc3RhcnR1cFxuICAgKiBAcGFyYW0gY21kQ29sbGVjdGlvbiB+IFRoZSBhcnJheSB3aXRoIGNvbW1hbmQgZmlsZSBuYW1lc1xuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgcHVibGljIGFzeW5jIHJlZ2lzdGVyU2xhc2hDb21tYW5kcyhyZXN0OiBSRVNULCBhcnJheTogQXJyYXk8YW55Pik6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnU3RhcnRlZCByZWZyZXNoaW5nIGFwcGxpY2F0aW9uICgvKSBjb21tYW5kcy4nKTtcblxuICAgICAgYXdhaXQgcmVzdC5wdXQoXG4gICAgICAgIFJvdXRlcy5hcHBsaWNhdGlvbkd1aWxkQ29tbWFuZHMoKHByb2Nlc3MuZW52LkNMSUVOVF9JRCBhcyBzdHJpbmcpLCAocHJvY2Vzcy5lbnYuR1VJTERfSUQgYXMgc3RyaW5nKSksXG4gICAgICAgIHsgYm9keTogYXJyYXkgfSxcbiAgICAgICk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgcmVsb2FkZWQgYXBwbGljYXRpb24gKC8pIGNvbW1hbmRzLicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbn0iXX0=