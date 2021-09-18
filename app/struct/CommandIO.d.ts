declare abstract class MemCommand {
    name: string;
    category: string;
    aliases: Array<string>;
    cooldown: number;
    constructor(name: string, category: string, aliases: Array<string>, cooldown: number);
    getCmdName(): string;
    getCmdCategory(): string;
    getCmdAliases(): Array<string>;
    memoryLoad(): any;
}
