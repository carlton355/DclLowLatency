import { JSONSchema, ValidateFunction } from '../validation';
import { ChainId } from './chain-id';
import { EmoteCategory, EmotePlayMode } from '../platform';
import { Network } from './network';
import { NFT } from './nft';
import { NFTCategory } from './nft-category';
import { Rarity } from './rarity';
import { WearableCategory } from './wearable-category';
import { WearableGender } from './wearable-gender';
export declare type Item = {
    id: string;
    name: string;
    thumbnail: string;
    url: string;
    category: NFTCategory;
    contractAddress: string;
    itemId: string;
    rarity: Rarity;
    price: string;
    available: number;
    isOnSale: boolean;
    creator: string;
    beneficiary: string | null;
    createdAt: number;
    updatedAt: number;
    reviewedAt: number;
    soldAt: number;
    data: NFT['data'];
    network: Network;
    chainId: ChainId;
};
export declare type ItemFilters = {
    first?: number;
    skip?: number;
    sortBy?: ItemSortBy;
    category?: NFTCategory;
    creator?: string;
    rarities?: Rarity[];
    isSoldOut?: boolean;
    isOnSale?: boolean;
    search?: string;
    isWearableHead?: boolean;
    isWearableAccessory?: boolean;
    isWearableSmart?: boolean;
    wearableCategory?: WearableCategory;
    wearableGenders?: WearableGender[];
    emoteCategory?: EmoteCategory;
    emoteGenders?: WearableGender[];
    emotePlayMode?: EmotePlayMode;
    contractAddresses?: string[];
    itemId?: string;
    network?: Network;
};
export declare enum ItemSortBy {
    NAME = "name",
    NEWEST = "newest",
    RECENTLY_REVIEWED = "recently_reviewed",
    RECENTLY_SOLD = "recently_sold",
    CHEAPEST = "cheapest"
}
export declare namespace Item {
    const schema: JSONSchema<Item>;
    const validate: ValidateFunction<Item>;
}
//# sourceMappingURL=item.d.ts.map