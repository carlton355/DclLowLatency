import { JSONSchema, ValidateFunction } from '../validation';
import { ChainId } from './chain-id';
import { BodyShape, EmoteCategory, EmotePlayMode } from '../platform';
import { Network } from './network';
import { NFTCategory } from './nft-category';
import { Rarity } from './rarity';
import { WearableCategory } from './wearable-category';
import { WearableGender } from './wearable-gender';
import { RentalsListingsFilterBy } from './rentals-listings';
export declare type NFT = {
    id: string;
    contractAddress: string;
    tokenId: string;
    activeOrderId: string | null;
    /** The ID of the open rental listing associated with the NFT */
    openRentalId: string | null;
    owner: string;
    name: string;
    category: NFTCategory;
    image: string;
    url: string;
    issuedId: string | null;
    itemId: string | null;
    data: {
        parcel?: {
            x: string;
            y: string;
            description: string | null;
            estate: {
                tokenId: string;
                name: string;
            } | null;
        };
        estate?: {
            size: number;
            parcels: {
                x: number;
                y: number;
            }[];
            description: string | null;
        };
        wearable?: {
            description: string;
            category: WearableCategory;
            rarity: Rarity;
            bodyShapes: BodyShape[];
            isSmart: boolean;
        };
        ens?: {
            subdomain: string;
        };
        emote?: {
            description: string;
            category: EmoteCategory;
            rarity: Rarity;
            bodyShapes: BodyShape[];
            loop: boolean;
        };
    };
    network: Network;
    chainId: ChainId;
    createdAt: number;
    updatedAt: number;
    soldAt: number;
};
export declare type NFTFilters = {
    first?: number;
    skip?: number;
    sortBy?: NFTSortBy;
    category?: NFTCategory;
    owner?: string;
    isOnSale?: boolean;
    isOnRent?: boolean;
    search?: string;
    itemRarities?: Rarity[];
    isLand?: boolean;
    isWearableHead?: boolean;
    isWearableAccessory?: boolean;
    isWearableSmart?: boolean;
    wearableCategory?: WearableCategory;
    wearableGenders?: WearableGender[];
    emoteCategory?: EmoteCategory;
    emoteGenders?: WearableGender[];
    emotePlayMode?: EmotePlayMode;
    contractAddresses?: string[];
    tokenId?: string;
    itemId?: string;
    network?: Network;
    rentalStatus?: RentalsListingsFilterBy['status'];
    ids?: string[];
} & Pick<RentalsListingsFilterBy, 'tenant'>;
export declare enum NFTSortBy {
    NAME = "name",
    NEWEST = "newest",
    RECENTLY_LISTED = "recently_listed",
    RECENTLY_SOLD = "recently_sold",
    CHEAPEST = "cheapest",
    RENTAL_LISTING_DATE = "rental_listing_date",
    RENTAL_DATE = "rented_date",
    MAX_RENTAL_PRICE = "max_rental_price",
    MIN_RENTAL_PRICE = "min_rental_price"
}
export declare namespace NFT {
    const schema: JSONSchema<NFT>;
    const validate: ValidateFunction<NFT>;
}
//# sourceMappingURL=nft.d.ts.map