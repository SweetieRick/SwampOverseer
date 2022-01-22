import { SlashCommandBuilder } from '@discordjs/builders';
import { fixBoostLevelIndicator, fixContentFilterIndicator, fixVerificationLevelIndicator } from '../functions/ServerInfoUtils';

module.exports = {
    data: new SlashCommandBuilder()
      .setName('serverinfo')
      .setDescription('Gets the server description')
    ,
    async interact(interaction: any) {
        const embed = {
            color: 0xa3ae7e,
            author: {
              name: `${interaction.guild?.name}`,
              icon_url: `${await interaction.guild?.iconURL()}`,
            },
            description: `${interaction.guild?.description}`,
            fields: [
              {
                name: 'Owner',
                value: `The one and the only **<@${interaction.guild?.ownerId}>**`,
                inline: true,
              },
              {
                name: 'Members',
                value: `${interaction.guild?.memberCount}`,
                inline: true,
              },
              {
                name: '<:boost_heart:841319980078858260> Boost Level',
                value: `${await fixBoostLevelIndicator(interaction.guild?.premiumTier)}`,
                inline: true,
              },
              {
                name: 'Moderation Level',
                value: `${await fixVerificationLevelIndicator(interaction.guild?.verificationLevel)}\n ${await fixContentFilterIndicator(interaction.guild?.explicitContentFilter)}`,
                inline: true,
              },
              {
                name: 'Server Creation',
                value: `${interaction.guild?.createdAt}`,
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