"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandRegister = void 0;
const fs = require("fs");
class CommandRegister {
    constructor() { }
    /**
     * Registers all command's data against Discord Slash Command API
     * @param collection ~ Client's collection of commands
     * @param pathDir ~ The path to the commands folder
     * @returns The collection with the new command data in it
     */
    async registerCommandData(collection, dir) {
        const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith('.ts'));
        for (const file of commandFiles) {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const command = require(`${dir}/${file}`);
            collection.set(command.data.name, command);
        }
    }
}
exports.CommandRegister = CommandRegister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZFJlZ2lzdGVySU8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVtcGxhdGUvQ29tbWFuZFJlZ2lzdGVySU8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBRXpCLE1BQWEsZUFBZTtJQUN4QixnQkFBZSxDQUFDO0lBRWhCOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLG1CQUFtQixDQUFDLFVBQWUsRUFBRSxHQUFXO1FBQ3pELE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTlFLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQzdCLGlFQUFpRTtZQUNqRSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztDQUNKO0FBbEJELDBDQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuZXhwb3J0IGNsYXNzIENvbW1hbmRSZWdpc3RlciB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGFsbCBjb21tYW5kJ3MgZGF0YSBhZ2FpbnN0IERpc2NvcmQgU2xhc2ggQ29tbWFuZCBBUElcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbiB+IENsaWVudCdzIGNvbGxlY3Rpb24gb2YgY29tbWFuZHNcbiAgICAgKiBAcGFyYW0gcGF0aERpciB+IFRoZSBwYXRoIHRvIHRoZSBjb21tYW5kcyBmb2xkZXJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29sbGVjdGlvbiB3aXRoIHRoZSBuZXcgY29tbWFuZCBkYXRhIGluIGl0XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHJlZ2lzdGVyQ29tbWFuZERhdGEoY29sbGVjdGlvbjogYW55LCBkaXI6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRGaWxlcyA9IGZzLnJlYWRkaXJTeW5jKGRpcikuZmlsdGVyKGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLnRzJykpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBjb21tYW5kRmlsZXMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gcmVxdWlyZShgJHtkaXJ9LyR7ZmlsZX1gKTtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uc2V0KGNvbW1hbmQuZGF0YS5uYW1lLCBjb21tYW5kKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=