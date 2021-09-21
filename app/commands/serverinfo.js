"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerInfoUtils_1 = require("../functions/ServerInfoUtils");
module.exports = {
    data: {
        name: 'serverinfo',
        description: 'Gets server info',
    },
    async execute(interaction) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
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
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQWdJO0FBRWhJLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsWUFBWTtRQUNsQixXQUFXLEVBQUUsa0JBQWtCO0tBQ2xDO0lBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFnQjs7UUFDMUIsTUFBTSxLQUFLLEdBQUc7WUFDVixLQUFLLEVBQUUsUUFBUTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsR0FBRyxNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLElBQUksRUFBRTtnQkFDbEMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFBLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsT0FBTyxFQUFFLENBQUEsRUFBRTthQUNsRDtZQUNELFdBQVcsRUFBRSxHQUFHLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsV0FBVyxFQUFFO1lBQ2hELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsNEJBQTRCLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsT0FBTyxLQUFLO29CQUNsRSxNQUFNLEVBQUUsSUFBSTtpQkFDYjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsR0FBRyxNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLFdBQVcsRUFBRTtvQkFDMUMsTUFBTSxFQUFFLElBQUk7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLCtDQUErQztvQkFDckQsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFBLHdDQUFzQixFQUFDLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsV0FBVyxDQUFDLEVBQUU7b0JBQ3hFLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2dCQUNEO29CQUNFLElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLEtBQUssRUFBRSxHQUFHLE1BQU0sSUFBQSwrQ0FBNkIsRUFBQyxNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLGlCQUFpQixDQUFDLE1BQU0sTUFBTSxJQUFBLDJDQUF5QixFQUFDLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUscUJBQXFCLENBQUMsRUFBRTtvQkFDcEssTUFBTSxFQUFFLElBQUk7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsS0FBSyxFQUFFLEdBQUcsTUFBQSxXQUFXLENBQUMsS0FBSywwQ0FBRSxTQUFTLEVBQUU7b0JBQ3hDLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BDLFFBQVEsRUFBRSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTthQUNuRDtTQUNGLENBQUM7UUFFRixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXhCb29zdExldmVsSW5kaWNhdG9yLCBmaXhDb250ZW50RmlsdGVySW5kaWNhdG9yLCBmaXhWZXJpZmljYXRpb25MZXZlbEluZGljYXRvciB9IGZyb20gJy4uL2Z1bmN0aW9ucy9TZXJ2ZXJJbmZvVXRpbHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6ICdzZXJ2ZXJpbmZvJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdHZXRzIHNlcnZlciBpbmZvJyxcbiAgICB9LFxuICAgIGFzeW5jIGV4ZWN1dGUoaW50ZXJhY3Rpb246IGFueSkge1xuICAgICAgICBjb25zdCBlbWJlZCA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAweGEzYWU3ZSxcbiAgICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgICBuYW1lOiBgJHtpbnRlcmFjdGlvbi5ndWlsZD8ubmFtZX1gLFxuICAgICAgICAgICAgICBpY29uX3VybDogYCR7YXdhaXQgaW50ZXJhY3Rpb24uZ3VpbGQ/Lmljb25VUkwoKX1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHtpbnRlcmFjdGlvbi5ndWlsZD8uZGVzY3JpcHRpb259YCxcbiAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ093bmVyJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYFRoZSBvbmUgYW5kIHRoZSBvbmx5ICoqPEAke2ludGVyYWN0aW9uLmd1aWxkPy5vd25lcklkfT4qKmAsXG4gICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ01lbWJlcnMnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtpbnRlcmFjdGlvbi5ndWlsZD8ubWVtYmVyQ291bnR9YCxcbiAgICAgICAgICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnPDpib29zdF9oZWFydDo4NDEzMTk5ODAwNzg4NTgyNjA+IEJvb3N0IExldmVsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYCR7YXdhaXQgZml4Qm9vc3RMZXZlbEluZGljYXRvcihpbnRlcmFjdGlvbi5ndWlsZD8ucHJlbWl1bVRpZXIpfWAsXG4gICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ01vZGVyYXRpb24gTGV2ZWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBgJHthd2FpdCBmaXhWZXJpZmljYXRpb25MZXZlbEluZGljYXRvcihpbnRlcmFjdGlvbi5ndWlsZD8udmVyaWZpY2F0aW9uTGV2ZWwpfVxcbiAke2F3YWl0IGZpeENvbnRlbnRGaWx0ZXJJbmRpY2F0b3IoaW50ZXJhY3Rpb24uZ3VpbGQ/LmV4cGxpY2l0Q29udGVudEZpbHRlcil9YCxcbiAgICAgICAgICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2VydmVyIENyZWF0aW9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYCR7aW50ZXJhY3Rpb24uZ3VpbGQ/LmNyZWF0ZWRBdH1gLFxuICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgICAgbmFtZTogYCR7aW50ZXJhY3Rpb24udXNlci51c2VybmFtZX1gLFxuICAgICAgICAgICAgICBpY29uX3VybDogYCR7aW50ZXJhY3Rpb24udXNlci5kaXNwbGF5QXZhdGFyVVJMKCl9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uLnJlcGx5KHsgZW1iZWRzOiBbZW1iZWRdIH0pO1xuICAgIH0sXG59OyJdfQ==