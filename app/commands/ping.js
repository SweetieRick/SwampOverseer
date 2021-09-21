"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    data: {
        name: 'ping',
        description: '🏓 Got the ball',
    },
    async execute(interaction, client) {
        await interaction.reply(`🏓 Got the ball. Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxNQUFNO1FBQ1osV0FBVyxFQUFFLGlCQUFpQjtLQUNqQztJQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBZ0IsRUFBRSxNQUFjO1FBQzFDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0Isc0JBQXNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUosQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdkaXNjb3JkLmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBuYW1lOiAncGluZycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn8J+PkyBHb3QgdGhlIGJhbGwnLFxuICAgIH0sXG4gICAgYXN5bmMgZXhlY3V0ZShpbnRlcmFjdGlvbjogYW55LCBjbGllbnQ6IENsaWVudCkge1xuICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbi5yZXBseShg8J+PkyBHb3QgdGhlIGJhbGwuIExhdGVuY3kgaXMgJHtEYXRlLm5vdygpIC0gaW50ZXJhY3Rpb24uY3JlYXRlZFRpbWVzdGFtcH1tcy4gQVBJIExhdGVuY3kgaXMgJHtNYXRoLnJvdW5kKGNsaWVudC53cy5waW5nKX1tc2ApO1xuICAgIH0sXG59OyJdfQ==