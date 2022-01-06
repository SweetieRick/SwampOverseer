import { REST } from '@discordjs/rest';
export declare class SlashRegister {
    constructor();
    /**
     * Registers all slash commands against the Discord API
     * @param rest ~ The REST discord interface that needs to be present on startup
     * @param cmdCollection ~ The array with command file names
     */
    registerSlashCommands(rest: REST, array: Array<any>): Promise<void>;
}
