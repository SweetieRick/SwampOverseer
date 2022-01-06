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
        const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const command = require(`${dir}/${file}`);
            collection.push(command.data.toJson());
            return collection;
        }
    }
}
exports.CommandRegister = CommandRegister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZFJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RlbXBsYXRlL0NvbW1hbmRSZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBeUI7QUFFekIsTUFBYSxlQUFlO0lBQ3hCLGdCQUFlLENBQUM7SUFFaEI7Ozs7O09BS0c7SUFDSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsVUFBc0IsRUFBRSxHQUFXO1FBQ2hFLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTlFLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQzdCLGlFQUFpRTtZQUNqRSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN2QyxPQUFPLFVBQVUsQ0FBQztTQUNyQjtJQUVMLENBQUM7Q0FDSjtBQXBCRCwwQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kUmVnaXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhbGwgY29tbWFuZCdzIGRhdGEgYWdhaW5zdCBEaXNjb3JkIFNsYXNoIENvbW1hbmQgQVBJXG4gICAgICogQHBhcmFtIGNvbGxlY3Rpb24gfiBDbGllbnQncyBjb2xsZWN0aW9uIG9mIGNvbW1hbmRzXG4gICAgICogQHBhcmFtIHBhdGhEaXIgfiBUaGUgcGF0aCB0byB0aGUgY29tbWFuZHMgZm9sZGVyXG4gICAgICogQHJldHVybnMgVGhlIGNvbGxlY3Rpb24gd2l0aCB0aGUgbmV3IGNvbW1hbmQgZGF0YSBpbiBpdFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyByZWdpc3RlckNvbW1hbmREYXRhKGNvbGxlY3Rpb246IEFycmF5PGFueT4sIGRpcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgY29tbWFuZEZpbGVzID0gZnMucmVhZGRpclN5bmMoZGlyKS5maWx0ZXIoZmlsZSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGNvbW1hbmRGaWxlcykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZXF1aXJlKGAke2Rpcn0vJHtmaWxlfWApO1xuICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKGNvbW1hbmQuZGF0YS50b0pzb24oKSk7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ==