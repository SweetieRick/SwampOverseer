import { SlashCommandBuilder } from '@discordjs/builders';
import { Client } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('🏓 Pong!')
    ,
    async interact(interaction: any, client: Client) {
        await interaction.reply(`🏓 Got the ball. Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    },
};