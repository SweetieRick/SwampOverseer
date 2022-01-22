import { Client, Interaction } from 'discord.js';

module.exports = {
    name: 'interactionCreate',
    async invoke(client: Client, interaction: Interaction) {
        // Defualt command existance checks
        if (!interaction.isCommand()) return;
        const command = client.commands.get(interaction.commandName);
        if (!command) return;

        try {
		  await command.interact(interaction, client);
	    } catch (error) {
		  console.error(error);
		  await interaction.reply({ content: 'Could not execute the command, please try later', ephemeral: true });
	    }
    },
};