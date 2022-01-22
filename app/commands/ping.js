"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    name: 'ping',
    description: 'Gets the bot ping',
    data: new builders_1.SlashCommandBuilder()
        .setName('ping')
        .setDescription('🏓 Pong!'),
    async interact(interaction, client) {
        var _a;
        await interaction.reply(`🏓 Got the ball. Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round((_a = client.ws) === null || _a === void 0 ? void 0 : _a.ping)}ms`);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQTBEO0FBRzFELE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxtQkFBbUI7SUFDaEMsSUFBSSxFQUFFLElBQUksOEJBQW1CLEVBQUU7U0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUNmLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFFL0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFnQixFQUFFLE1BQWM7O1FBQzNDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0Isc0JBQXNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBQSxNQUFNLENBQUMsRUFBRSwwQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0osQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbGFzaENvbW1hbmRCdWlsZGVyIH0gZnJvbSAnQGRpc2NvcmRqcy9idWlsZGVycyc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICdkaXNjb3JkLmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmFtZTogJ3BpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnR2V0cyB0aGUgYm90IHBpbmcnLFxuICAgIGRhdGE6IG5ldyBTbGFzaENvbW1hbmRCdWlsZGVyKClcbiAgICAgICAgLnNldE5hbWUoJ3BpbmcnKVxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oJ/Cfj5MgUG9uZyEnKVxuICAgICxcbiAgICBhc3luYyBpbnRlcmFjdChpbnRlcmFjdGlvbjogYW55LCBjbGllbnQ6IENsaWVudCkge1xuICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseShg8J+PkyBHb3QgdGhlIGJhbGwuIExhdGVuY3kgaXMgJHtEYXRlLm5vdygpIC0gaW50ZXJhY3Rpb24uY3JlYXRlZFRpbWVzdGFtcH1tcy4gQVBJIExhdGVuY3kgaXMgJHtNYXRoLnJvdW5kKGNsaWVudC53cz8ucGluZyl9bXNgKTtcbiAgICB9LFxufTsiXX0=