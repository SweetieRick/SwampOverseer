export declare class SlashRegister {
    constructor();
    /**
     * Registers all slash commands against the Discord API
     * @param rest ~ The REST discord interface that needs to be present on startup
     */
    registerSlashCommands(rest: any): Promise<any>;
}
