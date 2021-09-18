// ! import { PermissionFlags, Permissions } from 'discord.js';

abstract class MemCommand {
    constructor(
        public name: string,
        public category: string,
        public aliases: Array<string>,
        public cooldown: number,
        // Internal command values
        // ! private permissions: Permissions,
    ) {}

    getCmdName(): string {
        return this.name;
    }

    getCmdCategory(): string {
        return this.category;
    }

    getCmdAliases(): Array<string> {
        return this.aliases;
    }

    memoryLoad(): any {
        return console.log('cum');
    }
}
