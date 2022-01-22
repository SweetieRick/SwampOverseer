"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require('dotenv');
dotenv.config();
async function registerSlashCommands(dir) {
    // ? Pushes the array over to the Discord Application Command endpoint
    try {
        console.log('Started refreshing application (/) commands.');
        const commands = [];
        const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const command = require(`${dir}/${file}`);
            // commands.push(JSON.stringify(command.data));
            commands.push(command.data.toJSON());
        }
        // TODO Apparently the Discord API doesn't receive the post requests...
        const rest = new rest_1.REST({ version: '9' }).setToken(process.env.TOKEN);
        await rest.put(v9_1.Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    }
    catch (error) {
        console.error(error);
    }
}
exports.default = registerSlashCommands;
/*
import * as fs from 'fs';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const commands: any[] = [];
const commandFiles = fs.readdirSync('src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const command = require(`src/commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken('');

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands('', ''),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xhc2gtcHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NsYXNoLXB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUF5QjtBQUN6QiwwQ0FBdUM7QUFDdkMsNkNBQXlEO0FBQ3pELGlFQUFpRTtBQUNqRSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRUQsS0FBSyxVQUFVLHFCQUFxQixDQUFDLEdBQVc7SUFDN0Qsc0VBQXNFO0lBQ3RFLElBQUk7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFFNUQsTUFBTSxRQUFRLEdBQVUsRUFBRSxDQUFDO1FBQzNCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlFLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQy9CLGlFQUFpRTtZQUNqRSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxQywrQ0FBK0M7WUFDL0MsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDdEM7UUFFRCx1RUFBdUU7UUFDdkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFnQixDQUFDLENBQUM7UUFDaEYsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUNaLFdBQU0sQ0FBQyx3QkFBd0IsQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQXVCLEVBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFzQixDQUFDLEVBQzFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUNuQixDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0tBQ2hFO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQztBQXpCRCx3Q0F5QkM7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQStCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IFJFU1QgfSBmcm9tICdAZGlzY29yZGpzL3Jlc3QnO1xuaW1wb3J0IHsgUm91dGVzLCBTbm93Zmxha2UgfSBmcm9tICdkaXNjb3JkLWFwaS10eXBlcy92OSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52Jyk7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyU2xhc2hDb21tYW5kcyhkaXI6IHN0cmluZykge1xuICAvLyA/IFB1c2hlcyB0aGUgYXJyYXkgb3ZlciB0byB0aGUgRGlzY29yZCBBcHBsaWNhdGlvbiBDb21tYW5kIGVuZHBvaW50XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ1N0YXJ0ZWQgcmVmcmVzaGluZyBhcHBsaWNhdGlvbiAoLykgY29tbWFuZHMuJyk7XG5cbiAgICBjb25zdCBjb21tYW5kczogYW55W10gPSBbXTtcbiAgICBjb25zdCBjb21tYW5kRmlsZXMgPSBmcy5yZWFkZGlyU3luYyhkaXIpLmZpbHRlcihmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpKTtcbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgY29tbWFuZEZpbGVzKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgICAgY29uc3QgY29tbWFuZCA9IHJlcXVpcmUoYCR7ZGlyfS8ke2ZpbGV9YCk7XG4gICAgICAvLyBjb21tYW5kcy5wdXNoKEpTT04uc3RyaW5naWZ5KGNvbW1hbmQuZGF0YSkpO1xuICAgICAgY29tbWFuZHMucHVzaChjb21tYW5kLmRhdGEudG9KU09OKCkpO1xuICAgIH1cblxuICAgIC8vIFRPRE8gQXBwYXJlbnRseSB0aGUgRGlzY29yZCBBUEkgZG9lc24ndCByZWNlaXZlIHRoZSBwb3N0IHJlcXVlc3RzLi4uXG4gICAgY29uc3QgcmVzdCA9IG5ldyBSRVNUKHsgdmVyc2lvbjogJzknIH0pLnNldFRva2VuKChwcm9jZXNzLmVudi5UT0tFTiBhcyBzdHJpbmcpKTtcbiAgICBhd2FpdCByZXN0LnB1dChcbiAgICAgIFJvdXRlcy5hcHBsaWNhdGlvbkd1aWxkQ29tbWFuZHMoKHByb2Nlc3MuZW52LkNMSUVOVF9JRCBhcyBTbm93Zmxha2UpLCAocHJvY2Vzcy5lbnYuR1VJTERfSUQgYXMgU25vd2ZsYWtlKSksXG4gICAgICB7IGJvZHk6IGNvbW1hbmRzIH0sXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgcmVsb2FkZWQgYXBwbGljYXRpb24gKC8pIGNvbW1hbmRzLicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG5cblxuLypcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IFJFU1QgfSBmcm9tICdAZGlzY29yZGpzL3Jlc3QnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnZGlzY29yZC1hcGktdHlwZXMvdjknO1xuXG5jb25zdCBjb21tYW5kczogYW55W10gPSBbXTtcbmNvbnN0IGNvbW1hbmRGaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCdzcmMvY29tbWFuZHMnKS5maWx0ZXIoZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSk7XG5cbmZvciAoY29uc3QgZmlsZSBvZiBjb21tYW5kRmlsZXMpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcblx0Y29uc3QgY29tbWFuZCA9IHJlcXVpcmUoYHNyYy9jb21tYW5kcy8ke2ZpbGV9YCk7XG5cdGNvbW1hbmRzLnB1c2goY29tbWFuZC5kYXRhLnRvSlNPTigpKTtcbn1cblxuY29uc3QgcmVzdCA9IG5ldyBSRVNUKHsgdmVyc2lvbjogJzknIH0pLnNldFRva2VuKCcnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuKGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zb2xlLmxvZygnU3RhcnRlZCByZWZyZXNoaW5nIGFwcGxpY2F0aW9uICgvKSBjb21tYW5kcy4nKTtcblxuXHRcdGF3YWl0IHJlc3QucHV0KFxuXHRcdFx0Um91dGVzLmFwcGxpY2F0aW9uR3VpbGRDb21tYW5kcygnJywgJycpLFxuXHRcdFx0eyBib2R5OiBjb21tYW5kcyB9LFxuXHRcdCk7XG5cblx0XHRjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IHJlbG9hZGVkIGFwcGxpY2F0aW9uICgvKSBjb21tYW5kcy4nKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSkoKTtcbiovIl19