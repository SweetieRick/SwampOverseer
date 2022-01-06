export declare class CommandRegister {
    constructor();
    /**
     * Registers all command's data against Discord Slash Command API
     * @param collection ~ Client's collection of commands
     * @param pathDir ~ The path to the commands folder
     * @returns The collection with the new command data in it
     */
    registerCommandData(collection: Array<any>, dir: string): Promise<any>;
}
