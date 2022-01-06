"use strict";
// ! import { PermissionFlags, Permissions } from 'discord.js';
// ! import { CommandInteraction } from "discord.js";
/*
abstract class Command {
    execute(interaction: CommandInteraction) {
      throw new Error('Method not implemented.');
    }

    constructor(
        public name: string,
        public category: string,
        public aliases: Array<string>,
        public cooldown: number,
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
*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZElPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RlbXBsYXRlL0NvbW1hbmRJTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0RBQStEO0FBRS9ELHFEQUFxRDtBQUVyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE2QkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAhIGltcG9ydCB7IFBlcm1pc3Npb25GbGFncywgUGVybWlzc2lvbnMgfSBmcm9tICdkaXNjb3JkLmpzJztcblxuLy8gISBpbXBvcnQgeyBDb21tYW5kSW50ZXJhY3Rpb24gfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xuXG4vKlxuYWJzdHJhY3QgY2xhc3MgQ29tbWFuZCB7XG4gICAgZXhlY3V0ZShpbnRlcmFjdGlvbjogQ29tbWFuZEludGVyYWN0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjYXRlZ29yeTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgYWxpYXNlczogQXJyYXk8c3RyaW5nPixcbiAgICAgICAgcHVibGljIGNvb2xkb3duOiBudW1iZXIsXG4gICAgKSB7fVxuXG4gICAgZ2V0Q21kTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldENtZENhdGVnb3J5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3J5O1xuICAgIH1cblxuICAgIGdldENtZEFsaWFzZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsaWFzZXM7XG4gICAgfVxuXG4gICAgbWVtb3J5TG9hZCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ2N1bScpO1xuICAgIH1cbn1cbiovIl19