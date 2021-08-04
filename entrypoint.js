const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commandList = [

{
    name: 'ping',
    description: 'Replies with Pong!'
},
{
    name: 'test',
    description: 'Does testing'
}

]; 

const APIreq = new REST({ version: '9' }).setToken('token');

(async () => {
    try {
      console.log('Started refreshing application (/) commands.');
    
      await APIreq.put(
        Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
        { body: commandList },
      );
    
      console.log('Successfully reloaded application (/) commands.');
      
    } catch (error) {
      console.error(error);
    }
})();