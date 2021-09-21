"use strict";
module.exports = {
    data: {
        name: 'invite',
        description: 'Invite me!',
    },
    async execute(interaction) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2ludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxRQUFRO1FBQ2QsV0FBVyxFQUFFLFlBQVk7S0FDNUI7SUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzFCLE1BQU0sU0FBUyxHQUFHO1lBQ2QsS0FBSyxFQUFFLFFBQVE7WUFDZixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLG1DQUFtQzthQUMxQztZQUNELFdBQVcsRUFBRSw4TEFBOEw7U0FDNU0sQ0FBQztRQUNGLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJ2ludml0ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSW52aXRlIG1lIScsXG4gICAgfSxcbiAgICBhc3luYyBleGVjdXRlKGludGVyYWN0aW9uOiBhbnkpIHtcbiAgICAgICAgY29uc3QgaW52aXRlZW1iID0ge1xuICAgICAgICAgICAgY29sb3I6IDB4YTNhZTdlLFxuICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdXYW50IHRvIGludml0ZSBtZSBpbiB5b3VyIHNlcnZlcj8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXMgZm9yIG5vdywgU3dhbXAgT3ZlcnNlZXIgaXMgaW4gYSBleHBlcmltZW50YWwgc3RhZ2UsIHdoaWNoIG1lYW5zIHlvdSBjYW4gb25seSB0cnkgaXQgbGl2ZSByaWdodCBoZXJlIHVudGlsIGEgc3RhYmxlIHJlbGVhc2UgaXMgYXZhaWxhYmxlIHRvIHRoZSBwdWJsaWMuIFN0YXkgdHVuZWQgZm9yIG1vcmUgc3R1ZmYgdG8gY29tZSEnLFxuICAgICAgICAgIH07XG4gICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb24ucmVwbHkoeyBlbWJlZHM6IFtpbnZpdGVlbWJdIH0pO1xuICAgIH0sXG59OyJdfQ==