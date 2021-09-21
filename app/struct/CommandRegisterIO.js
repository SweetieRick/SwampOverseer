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
    registerCommandData(collection, pathDir) {
        const cmdFileData = fs.readdirSync(pathDir).filter(file => file.endsWith('.js'));
        for (const file of cmdFileData) {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const command = require(`${pathDir}/${file}`);
            return collection.set(command.data.name, command);
        }
    }
}
exports.CommandRegister = CommandRegister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZFJlZ2lzdGVySU8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RydWN0L0NvbW1hbmRSZWdpc3RlcklPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUV6QixNQUFhLGVBQWU7SUFDeEIsZ0JBQWUsQ0FBQztJQUVoQjs7Ozs7T0FLRztJQUNJLG1CQUFtQixDQUFDLFVBQWUsRUFBRSxPQUFlO1FBQ3ZELE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWpGLEtBQUssTUFBTSxJQUFJLElBQUksV0FBVyxFQUFFO1lBQzVCLGlFQUFpRTtZQUNqRSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5QyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDckQ7SUFDTCxDQUFDO0NBQ0o7QUFsQkQsMENBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG5leHBvcnQgY2xhc3MgQ29tbWFuZFJlZ2lzdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYWxsIGNvbW1hbmQncyBkYXRhIGFnYWluc3QgRGlzY29yZCBTbGFzaCBDb21tYW5kIEFQSVxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uIH4gQ2xpZW50J3MgY29sbGVjdGlvbiBvZiBjb21tYW5kc1xuICAgICAqIEBwYXJhbSBwYXRoRGlyIH4gVGhlIHBhdGggdG8gdGhlIGNvbW1hbmRzIGZvbGRlclxuICAgICAqIEByZXR1cm5zIFRoZSBjb2xsZWN0aW9uIHdpdGggdGhlIG5ldyBjb21tYW5kIGRhdGEgaW4gaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJDb21tYW5kRGF0YShjb2xsZWN0aW9uOiBhbnksIHBhdGhEaXI6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IGNtZEZpbGVEYXRhID0gZnMucmVhZGRpclN5bmMocGF0aERpcikuZmlsdGVyKGZpbGUgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBjbWRGaWxlRGF0YSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHNcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSByZXF1aXJlKGAke3BhdGhEaXJ9LyR7ZmlsZX1gKTtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uLnNldChjb21tYW5kLmRhdGEubmFtZSwgY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19