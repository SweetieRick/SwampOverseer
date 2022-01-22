"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const ServerInfoUtils_1 = require("../functions/ServerInfoUtils");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Gets the server description'),
    async interact(interaction) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQTBEO0FBQzFELGtFQUFnSTtBQUVoSSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsSUFBSSxFQUFFLElBQUksOEJBQW1CLEVBQUU7U0FDNUIsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUNyQixjQUFjLENBQUMsNkJBQTZCLENBQUM7SUFFaEQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFnQjs7UUFDM0IsTUFBTSxLQUFLLEdBQUc7WUFDVixLQUFLLEVBQUUsUUFBUTtZQUNmLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsR0FBRyxNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLElBQUksRUFBRTtnQkFDbEMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFBLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsT0FBTyxFQUFFLENBQUEsRUFBRTthQUNsRDtZQUNELFdBQVcsRUFBRSxHQUFHLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsV0FBVyxFQUFFO1lBQ2hELE1BQU0sRUFBRTtnQkFDTjtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUUsNEJBQTRCLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsT0FBTyxLQUFLO29CQUNsRSxNQUFNLEVBQUUsSUFBSTtpQkFDYjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsR0FBRyxNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLFdBQVcsRUFBRTtvQkFDMUMsTUFBTSxFQUFFLElBQUk7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLCtDQUErQztvQkFDckQsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFBLHdDQUFzQixFQUFDLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUsV0FBVyxDQUFDLEVBQUU7b0JBQ3hFLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2dCQUNEO29CQUNFLElBQUksRUFBRSxrQkFBa0I7b0JBQ3hCLEtBQUssRUFBRSxHQUFHLE1BQU0sSUFBQSwrQ0FBNkIsRUFBQyxNQUFBLFdBQVcsQ0FBQyxLQUFLLDBDQUFFLGlCQUFpQixDQUFDLE1BQU0sTUFBTSxJQUFBLDJDQUF5QixFQUFDLE1BQUEsV0FBVyxDQUFDLEtBQUssMENBQUUscUJBQXFCLENBQUMsRUFBRTtvQkFDcEssTUFBTSxFQUFFLElBQUk7aUJBQ2I7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsS0FBSyxFQUFFLEdBQUcsTUFBQSxXQUFXLENBQUMsS0FBSywwQ0FBRSxTQUFTLEVBQUU7b0JBQ3hDLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2FBQ0Y7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BDLFFBQVEsRUFBRSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTthQUNuRDtTQUNGLENBQUM7UUFFRixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbGFzaENvbW1hbmRCdWlsZGVyIH0gZnJvbSAnQGRpc2NvcmRqcy9idWlsZGVycyc7XG5pbXBvcnQgeyBmaXhCb29zdExldmVsSW5kaWNhdG9yLCBmaXhDb250ZW50RmlsdGVySW5kaWNhdG9yLCBmaXhWZXJpZmljYXRpb25MZXZlbEluZGljYXRvciB9IGZyb20gJy4uL2Z1bmN0aW9ucy9TZXJ2ZXJJbmZvVXRpbHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiBuZXcgU2xhc2hDb21tYW5kQnVpbGRlcigpXG4gICAgICAuc2V0TmFtZSgnc2VydmVyaW5mbycpXG4gICAgICAuc2V0RGVzY3JpcHRpb24oJ0dldHMgdGhlIHNlcnZlciBkZXNjcmlwdGlvbicpXG4gICAgLFxuICAgIGFzeW5jIGludGVyYWN0KGludGVyYWN0aW9uOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZW1iZWQgPSB7XG4gICAgICAgICAgICBjb2xvcjogMHhhM2FlN2UsXG4gICAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgICAgbmFtZTogYCR7aW50ZXJhY3Rpb24uZ3VpbGQ/Lm5hbWV9YCxcbiAgICAgICAgICAgICAgaWNvbl91cmw6IGAke2F3YWl0IGludGVyYWN0aW9uLmd1aWxkPy5pY29uVVJMKCl9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7aW50ZXJhY3Rpb24uZ3VpbGQ/LmRlc2NyaXB0aW9ufWAsXG4gICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdPd25lcicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGBUaGUgb25lIGFuZCB0aGUgb25seSAqKjxAJHtpbnRlcmFjdGlvbi5ndWlsZD8ub3duZXJJZH0+KipgLFxuICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYCR7aW50ZXJhY3Rpb24uZ3VpbGQ/Lm1lbWJlckNvdW50fWAsXG4gICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJzw6Ym9vc3RfaGVhcnQ6ODQxMzE5OTgwMDc4ODU4MjYwPiBCb29zdCBMZXZlbCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGAke2F3YWl0IGZpeEJvb3N0TGV2ZWxJbmRpY2F0b3IoaW50ZXJhY3Rpb24uZ3VpbGQ/LnByZW1pdW1UaWVyKX1gLFxuICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNb2RlcmF0aW9uIExldmVsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYCR7YXdhaXQgZml4VmVyaWZpY2F0aW9uTGV2ZWxJbmRpY2F0b3IoaW50ZXJhY3Rpb24uZ3VpbGQ/LnZlcmlmaWNhdGlvbkxldmVsKX1cXG4gJHthd2FpdCBmaXhDb250ZW50RmlsdGVySW5kaWNhdG9yKGludGVyYWN0aW9uLmd1aWxkPy5leHBsaWNpdENvbnRlbnRGaWx0ZXIpfWAsXG4gICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NlcnZlciBDcmVhdGlvbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGAke2ludGVyYWN0aW9uLmd1aWxkPy5jcmVhdGVkQXR9YCxcbiAgICAgICAgICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgIG5hbWU6IGAke2ludGVyYWN0aW9uLnVzZXIudXNlcm5hbWV9YCxcbiAgICAgICAgICAgICAgaWNvbl91cmw6IGAke2ludGVyYWN0aW9uLnVzZXIuZGlzcGxheUF2YXRhclVSTCgpfWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseSh7IGVtYmVkczogW2VtYmVkXSB9KTtcbiAgICB9LFxufTsiXX0=