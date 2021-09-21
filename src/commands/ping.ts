import { Client } from 'discord.js';

module.exports = {
    data: {
        name: 'ping',
        description: '🏓 Got the ball',
    },
    async execute(interaction: any, client: Client) {
        await interaction.reply(`🏓 Got the ball. Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    },
};