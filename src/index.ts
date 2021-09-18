import { REST } from '@discordjs/rest';
import { Client, Intents } from 'discord.js';
import { fixBoostLevelIndicator, fixContentFilterIndicator, fixVerificationLevelIndicator } from './functions/ServerInfoUtils';
import { SlashRegister } from './slash-put';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES,
    ],
});

client.once('ready', () => {
  console.log('Swamp Tester online');
  const rest = new REST({ version: '9' }).setToken((process.env.TOKEN as string));
  const slashmanager = new SlashRegister();
  void slashmanager.registerSlashCommands(rest);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;

  switch (commandName) {
    case 'ping':
      await interaction.reply(`🏓 Got the ball. Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
      break;
    case 'serverinfo':
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
  }
});

// eslint-disable-next-line @typescript-eslint/no-floating-promises
client.login(process.env.TOKEN);

