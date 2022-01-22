import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Sends invite link for the bot')
        .setDefaultPermission(true)
    ,
    async interact(interaction: any) {
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