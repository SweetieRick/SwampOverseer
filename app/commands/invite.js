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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2ludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxRQUFRO1FBQ2QsV0FBVyxFQUFFLFlBQVk7S0FDNUI7SUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzFCLE1BQU0sU0FBUyxHQUFHO1lBQ2QsS0FBSyxFQUFFLFFBQVE7WUFDZixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLG1DQUFtQzthQUMxQztZQUNELFdBQVcsRUFBRSw4TEFBOEw7U0FDNU0sQ0FBQztRQUNGLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBuYW1lOiAnaW52aXRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdJbnZpdGUgbWUhJyxcbiAgICB9LFxuICAgIGFzeW5jIGV4ZWN1dGUoaW50ZXJhY3Rpb246IGFueSkge1xuICAgICAgICBjb25zdCBpbnZpdGVlbWIgPSB7XG4gICAgICAgICAgICBjb2xvcjogMHhhM2FlN2UsXG4gICAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgICAgbmFtZTogJ1dhbnQgdG8gaW52aXRlIG1lIGluIHlvdXIgc2VydmVyPycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBcyBmb3Igbm93LCBTd2FtcCBPdmVyc2VlciBpcyBpbiBhIGV4cGVyaW1lbnRhbCBzdGFnZSwgd2hpY2ggbWVhbnMgeW91IGNhbiBvbmx5IHRyeSBpdCBsaXZlIHJpZ2h0IGhlcmUgdW50aWwgYSBzdGFibGUgcmVsZWFzZSBpcyBhdmFpbGFibGUgdG8gdGhlIHB1YmxpYy4gU3RheSB0dW5lZCBmb3IgbW9yZSBzdHVmZiB0byBjb21lIScsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7IGVtYmVkczogW2ludml0ZWVtYl0gfSk7XG4gICAgfSxcbn07Il19