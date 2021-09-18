"use strict";
// ! import { PermissionFlags, Permissions } from 'discord.js';
class MemCommand {
    constructor(name, category, aliases, cooldown) {
        this.name = name;
        this.category = category;
        this.aliases = aliases;
        this.cooldown = cooldown;
    }
    getCmdName() {
        return this.name;
    }
    getCmdCategory() {
        return this.category;
    }
    getCmdAliases() {
        return this.aliases;
    }
    memoryLoad() {
        return console.log('cum');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZElPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cnVjdC9Db21tYW5kSU8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUErRDtBQUUvRCxNQUFlLFVBQVU7SUFDckIsWUFDVyxJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsT0FBc0IsRUFDdEIsUUFBZ0I7UUFIaEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFRO0lBR3hCLENBQUM7SUFFSixVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxVQUFVO1FBQ04sT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vICEgaW1wb3J0IHsgUGVybWlzc2lvbkZsYWdzLCBQZXJtaXNzaW9ucyB9IGZyb20gJ2Rpc2NvcmQuanMnO1xuXG5hYnN0cmFjdCBjbGFzcyBNZW1Db21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBhbGlhc2VzOiBBcnJheTxzdHJpbmc+LFxuICAgICAgICBwdWJsaWMgY29vbGRvd246IG51bWJlcixcbiAgICAgICAgLy8gSW50ZXJuYWwgY29tbWFuZCB2YWx1ZXNcbiAgICAgICAgLy8gISBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9ucyxcbiAgICApIHt9XG5cbiAgICBnZXRDbWROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0Q21kQ2F0ZWdvcnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcnk7XG4gICAgfVxuXG4gICAgZ2V0Q21kQWxpYXNlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxpYXNlcztcbiAgICB9XG5cbiAgICBtZW1vcnlMb2FkKCk6IGFueSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnY3VtJyk7XG4gICAgfVxufVxuIl19