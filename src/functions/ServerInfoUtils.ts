export async function fixBoostLevelIndicator(tier:any) {
    var stringifyed = tier.toString();
    var result:any;

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
    } else {
        return result;
    }
}

export async function fixContentFilterIndicator(filter:any) {
    var stringifyed = filter.toString();
    var result:any;

    if (filter) {
        switch (stringifyed) {
            case 'DISABLED':
                return result = '<:switchoff:841319897932890114> Content filter disabled';
            case 'MEMBERS_WITHOUT_ROLES':
                return result = '<:switchon:841319932800270336> Content filter for visitors';
            case 'ALL_MEMBERS':
                return result = '<:switchon:841319932800270336> Content filter for all members';
        }
    } else {
        return result;
    }
}

export async function fixVerificationLevelIndicator(verification:any) {
    var stringifyed = verification.toString();
    var result:any;

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
    } else {
        return result;
    }
}