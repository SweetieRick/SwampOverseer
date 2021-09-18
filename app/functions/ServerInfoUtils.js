"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixVerificationLevelIndicator = exports.fixContentFilterIndicator = exports.fixBoostLevelIndicator = void 0;
async function fixBoostLevelIndicator(tier) {
    var stringifyed = tier.toString();
    var result;
    if (tier) {
        switch (stringifyed) {
            case 'TIER_1':
                return result = '<:b_boost_7:888815550422196274> Level 1 boosted';
            case 'TIER_2':
                return result = '<:b_boost_8:888815550564806756> Level 2 boosted';
            case 'TIER_3':
                return result = '<:b_boost_9:888815550648700968> Level 3 boosted';
            case 'NONE':
                return result = 'No server boosts';
        }
    }
    else {
        return result;
    }
}
exports.fixBoostLevelIndicator = fixBoostLevelIndicator;
async function fixContentFilterIndicator(filter) {
    var stringifyed = filter.toString();
    var result;
    if (filter) {
        switch (stringifyed) {
            case 'DISABLED':
                return result = '<:switchoff:841319897932890114> Content filter disabled';
            case 'MEMBERS_WITHOUT_ROLES':
                return result = '<:switchon:841319932800270336> Content filter for visitors';
            case 'ALL_MEMBERS':
                return result = '<:switchon:841319932800270336> Content filter for all members';
        }
    }
    else {
        return result;
    }
}
exports.fixContentFilterIndicator = fixContentFilterIndicator;
async function fixVerificationLevelIndicator(verification) {
    var stringifyed = verification.toString();
    var result;
    if (verification) {
        switch (stringifyed) {
            case 'LOW':
                return result = '<:mod_lvl_low:888817353893249106> E-mail verification required';
            case 'MEDIUM':
                return result = '<:mod_lvl_med:888817353989709836> 5 min(s). account creation required';
            case 'HIGH':
                return result = '<:mod_lvl_high:888817354052624395> 10 min(s). in server required';
            case 'VERY_HIGH':
                return result = '<:mod_lvl_highest:888817354283298826> Phone Verification required';
            case 'NONE':
                return result = '<:mod_lvl_off:888817353738051685> No verification';
        }
    }
    else {
        return result;
    }
}
exports.fixVerificationLevelIndicator = fixVerificationLevelIndicator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVySW5mb1V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmN0aW9ucy9TZXJ2ZXJJbmZvVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sS0FBSyxVQUFVLHNCQUFzQixDQUFDLElBQVE7SUFDakQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xDLElBQUksTUFBVSxDQUFDO0lBRWYsSUFBSSxJQUFJLEVBQUU7UUFDTixRQUFRLFdBQVcsRUFBRTtZQUNqQixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxNQUFNLEdBQUcsaURBQWlELENBQUM7WUFDdEUsS0FBSyxRQUFRO2dCQUNULE9BQU8sTUFBTSxHQUFHLGlEQUFpRCxDQUFDO1lBQ3RFLEtBQUssUUFBUTtnQkFDVCxPQUFPLE1BQU0sR0FBRyxpREFBaUQsQ0FBQztZQUN0RSxLQUFLLE1BQU07Z0JBQ1AsT0FBTyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7U0FDMUM7S0FDSjtTQUFNO1FBQ0gsT0FBTyxNQUFNLENBQUM7S0FDakI7QUFDTCxDQUFDO0FBbEJELHdEQWtCQztBQUVNLEtBQUssVUFBVSx5QkFBeUIsQ0FBQyxNQUFVO0lBQ3RELElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxJQUFJLE1BQVUsQ0FBQztJQUVmLElBQUksTUFBTSxFQUFFO1FBQ1IsUUFBUSxXQUFXLEVBQUU7WUFDakIsS0FBSyxVQUFVO2dCQUNYLE9BQU8sTUFBTSxHQUFHLHlEQUF5RCxDQUFDO1lBQzlFLEtBQUssdUJBQXVCO2dCQUN4QixPQUFPLE1BQU0sR0FBRyw0REFBNEQsQ0FBQztZQUNqRixLQUFLLGFBQWE7Z0JBQ2QsT0FBTyxNQUFNLEdBQUcsK0RBQStELENBQUM7U0FDdkY7S0FDSjtTQUFNO1FBQ0gsT0FBTyxNQUFNLENBQUM7S0FDakI7QUFDTCxDQUFDO0FBaEJELDhEQWdCQztBQUVNLEtBQUssVUFBVSw2QkFBNkIsQ0FBQyxZQUFnQjtJQUNoRSxJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsSUFBSSxNQUFVLENBQUM7SUFFZixJQUFJLFlBQVksRUFBRTtRQUNkLFFBQVEsV0FBVyxFQUFFO1lBQ2pCLEtBQUssS0FBSztnQkFDTixPQUFPLE1BQU0sR0FBRyxnRUFBZ0UsQ0FBQztZQUNyRixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxNQUFNLEdBQUcsdUVBQXVFLENBQUM7WUFDNUYsS0FBSyxNQUFNO2dCQUNQLE9BQU8sTUFBTSxHQUFHLGtFQUFrRSxDQUFDO1lBQ3ZGLEtBQUssV0FBVztnQkFDWixPQUFPLE1BQU0sR0FBRyxtRUFBbUUsQ0FBQztZQUN4RixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxNQUFNLEdBQUcsbURBQW1ELENBQUM7U0FDM0U7S0FDSjtTQUFNO1FBQ0gsT0FBTyxNQUFNLENBQUM7S0FDakI7QUFDTCxDQUFDO0FBcEJELHNFQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaXhCb29zdExldmVsSW5kaWNhdG9yKHRpZXI6YW55KSB7XG4gICAgdmFyIHN0cmluZ2lmeWVkID0gdGllci50b1N0cmluZygpO1xuICAgIHZhciByZXN1bHQ6YW55O1xuXG4gICAgaWYgKHRpZXIpIHtcbiAgICAgICAgc3dpdGNoIChzdHJpbmdpZnllZCkge1xuICAgICAgICAgICAgY2FzZSAnVElFUl8xJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ID0gJzw6Yl9ib29zdF83Ojg4ODgxNTU1MDQyMjE5NjI3ND4gTGV2ZWwgMSBib29zdGVkJztcbiAgICAgICAgICAgIGNhc2UgJ1RJRVJfMic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9ICc8OmJfYm9vc3RfODo4ODg4MTU1NTA1NjQ4MDY3NTY+IExldmVsIDIgYm9vc3RlZCc7XG4gICAgICAgICAgICBjYXNlICdUSUVSXzMnOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgPSAnPDpiX2Jvb3N0Xzk6ODg4ODE1NTUwNjQ4NzAwOTY4PiBMZXZlbCAzIGJvb3N0ZWQnO1xuICAgICAgICAgICAgY2FzZSAnTk9ORSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9ICdObyBzZXJ2ZXIgYm9vc3RzJztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZml4Q29udGVudEZpbHRlckluZGljYXRvcihmaWx0ZXI6YW55KSB7XG4gICAgdmFyIHN0cmluZ2lmeWVkID0gZmlsdGVyLnRvU3RyaW5nKCk7XG4gICAgdmFyIHJlc3VsdDphbnk7XG5cbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHN3aXRjaCAoc3RyaW5naWZ5ZWQpIHtcbiAgICAgICAgICAgIGNhc2UgJ0RJU0FCTEVEJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ID0gJzw6c3dpdGNob2ZmOjg0MTMxOTg5NzkzMjg5MDExND4gQ29udGVudCBmaWx0ZXIgZGlzYWJsZWQnO1xuICAgICAgICAgICAgY2FzZSAnTUVNQkVSU19XSVRIT1VUX1JPTEVTJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ID0gJzw6c3dpdGNob246ODQxMzE5OTMyODAwMjcwMzM2PiBDb250ZW50IGZpbHRlciBmb3IgdmlzaXRvcnMnO1xuICAgICAgICAgICAgY2FzZSAnQUxMX01FTUJFUlMnOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgPSAnPDpzd2l0Y2hvbjo4NDEzMTk5MzI4MDAyNzAzMzY+IENvbnRlbnQgZmlsdGVyIGZvciBhbGwgbWVtYmVycyc7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpeFZlcmlmaWNhdGlvbkxldmVsSW5kaWNhdG9yKHZlcmlmaWNhdGlvbjphbnkpIHtcbiAgICB2YXIgc3RyaW5naWZ5ZWQgPSB2ZXJpZmljYXRpb24udG9TdHJpbmcoKTtcbiAgICB2YXIgcmVzdWx0OmFueTtcblxuICAgIGlmICh2ZXJpZmljYXRpb24pIHtcbiAgICAgICAgc3dpdGNoIChzdHJpbmdpZnllZCkge1xuICAgICAgICAgICAgY2FzZSAnTE9XJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ID0gJzw6bW9kX2x2bF9sb3c6ODg4ODE3MzUzODkzMjQ5MTA2PiBFLW1haWwgdmVyaWZpY2F0aW9uIHJlcXVpcmVkJztcbiAgICAgICAgICAgIGNhc2UgJ01FRElVTSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9ICc8Om1vZF9sdmxfbWVkOjg4ODgxNzM1Mzk4OTcwOTgzNj4gNSBtaW4ocykuIGFjY291bnQgY3JlYXRpb24gcmVxdWlyZWQnO1xuICAgICAgICAgICAgY2FzZSAnSElHSCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9ICc8Om1vZF9sdmxfaGlnaDo4ODg4MTczNTQwNTI2MjQzOTU+IDEwIG1pbihzKS4gaW4gc2VydmVyIHJlcXVpcmVkJztcbiAgICAgICAgICAgIGNhc2UgJ1ZFUllfSElHSCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9ICc8Om1vZF9sdmxfaGlnaGVzdDo4ODg4MTczNTQyODMyOTg4MjY+IFBob25lIFZlcmlmaWNhdGlvbiByZXF1aXJlZCc7XG4gICAgICAgICAgICBjYXNlICdOT05FJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ID0gJzw6bW9kX2x2bF9vZmY6ODg4ODE3MzUzNzM4MDUxNjg1PiBObyB2ZXJpZmljYXRpb24nO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59Il19