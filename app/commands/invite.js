"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('invite')
        .setDescription('Sends invite link for the bot')
        .setDefaultPermission(true),
    async interact(interaction) {
        const inviteemb = {
            color: 0xa3ae7e,
            author: {
                name: 'Want to invite me in your server?',
            },
            description: 'As for now, Swamp Overseer is in a experimental stage, which means you can only try it live right here until a stable release is available to the public. Stay tuned for more stuff to come!',
        };
        await interaction.reply({ embeds: [inviteemb] });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2ludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUEwRDtBQUUxRCxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsSUFBSSxFQUFFLElBQUksOEJBQW1CLEVBQUU7U0FDMUIsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUNqQixjQUFjLENBQUMsK0JBQStCLENBQUM7U0FDL0Msb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBRS9CLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBZ0I7UUFDM0IsTUFBTSxTQUFTLEdBQUc7WUFDZCxLQUFLLEVBQUUsUUFBUTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsbUNBQW1DO2FBQzFDO1lBQ0QsV0FBVyxFQUFFLDhMQUE4TDtTQUM5TSxDQUFDO1FBQ0EsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2xhc2hDb21tYW5kQnVpbGRlciB9IGZyb20gJ0BkaXNjb3JkanMvYnVpbGRlcnMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiBuZXcgU2xhc2hDb21tYW5kQnVpbGRlcigpXG4gICAgICAgIC5zZXROYW1lKCdpbnZpdGUnKVxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oJ1NlbmRzIGludml0ZSBsaW5rIGZvciB0aGUgYm90JylcbiAgICAgICAgLnNldERlZmF1bHRQZXJtaXNzaW9uKHRydWUpXG4gICAgLFxuICAgIGFzeW5jIGludGVyYWN0KGludGVyYWN0aW9uOiBhbnkpIHtcbiAgICAgICAgY29uc3QgaW52aXRlZW1iID0ge1xuICAgICAgICAgICAgY29sb3I6IDB4YTNhZTdlLFxuICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdXYW50IHRvIGludml0ZSBtZSBpbiB5b3VyIHNlcnZlcj8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXMgZm9yIG5vdywgU3dhbXAgT3ZlcnNlZXIgaXMgaW4gYSBleHBlcmltZW50YWwgc3RhZ2UsIHdoaWNoIG1lYW5zIHlvdSBjYW4gb25seSB0cnkgaXQgbGl2ZSByaWdodCBoZXJlIHVudGlsIGEgc3RhYmxlIHJlbGVhc2UgaXMgYXZhaWxhYmxlIHRvIHRoZSBwdWJsaWMuIFN0YXkgdHVuZWQgZm9yIG1vcmUgc3R1ZmYgdG8gY29tZSEnLFxuICAgICAgICB9O1xuICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgZW1iZWRzOiBbaW52aXRlZW1iXSB9KTtcbiAgICB9LFxufTsiXX0=