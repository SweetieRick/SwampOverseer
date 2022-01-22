import { Collection } from '@discordjs/collection';

declare module "discord.js" {
    export interface Client {
        commands: Collection<unknown, Command>
    }

    export interface Command {
        name: string,
        description: string,
        interact: (interaction: Interaction) => Promise<any> // Can be `Promise<SomeType>` if using async
        execute: (message: Message) => Promise<any>
    }
}