import Ajv from 'ajv';
import { ErrorObject } from 'ajv';
import { JSONSchemaType } from 'ajv';
import { KeywordDefinition } from 'ajv';

/**
 * Common structure to use types as values in TS.
 * @public
 */
export declare type AbstractTypedSchema<T> = {
    schema: JSONSchema<T>;
    validate: ValidateFunction<T>;
};

export declare type Account = {
    id: string;
    address: string;
    sales: number;
    purchases: number;
    spent: string;
    earned: string;
    royalties: string;
};

export declare namespace Account {
    const schema: JSONSchema<Account>;
    const validate: ValidateFunction<Account>;
}

export declare type AccountFilters = {
    first?: number;
    skip?: number;
    sortBy?: AccountSortBy;
    id?: string;
    address?: string;
    network?: Network;
};

export declare enum AccountSortBy {
    MOST_SALES = "most_sales",
    MOST_PURCHASES = "most_purchases",
    MOST_SPENT = "most_spent",
    MOST_EARNED = "most_earned",
    MOST_ROYALTIES = "most_royalties"
}

/** @public */
declare type Actions = typeof SCENE_UPDATE | typeof UPDATE;

export { Ajv }

export declare type AnalyticsDayData = {
    id: string;
    date: number;
    sales: number;
    volume: string;
    creatorsEarnings: string;
    daoEarnings: string;
};

export declare type AnalyticsDayDataFilters = {
    from?: number;
    network?: Network;
};

export declare enum AnalyticsDayDataSortBy {
    DATE = "date",
    MOST_SALES = "most_sales"
}

/**
 * AuthChain is an array of elements used to create and verify signatures
 * and ephemeral keys.
 *
 * @public
 */
export declare type AuthChain = AuthLink[];

/** @public */
export declare namespace AuthChain {
    const schema: JSONSchema<AuthChain>;
    const validate: ValidateFunction<AuthChain>;
}

/**
 * @public
 */
export declare type AuthLink = {
    type: AuthLinkType;
    payload: string;
    signature?: string;
};

/**
 * @public
 */
export declare namespace AuthLink {
    const schema: JSONSchema<AuthLink>;
    const validate: ValidateFunction<AuthLink>;
}

/**
 * @public
 */
export declare enum AuthLinkType {
    'SIGNER' = "SIGNER",
    'ECDSA_PERSONAL_EPHEMERAL' = "ECDSA_EPHEMERAL",
    'ECDSA_PERSONAL_SIGNED_ENTITY' = "ECDSA_SIGNED_ENTITY",
    /**
     * See https://github.com/ethereum/EIPs/issues/1654
     */
    'ECDSA_EIP_1654_EPHEMERAL' = "ECDSA_EIP_1654_EPHEMERAL",
    /**
     * See https://github.com/ethereum/EIPs/issues/1654
     */
    'ECDSA_EIP_1654_SIGNED_ENTITY' = "ECDSA_EIP_1654_SIGNED_ENTITY"
}

/**
 * Avatar represents a profile avatar. Used both for comms, internal state of the
 * explorer and the deployed profiles.
 * @alpha
 */
export declare type Avatar = {
    userId: string;
    name: string;
    description: string;
    ethAddress: EthAddress;
    version: number;
    tutorialStep: number;
    email?: string;
    blocked?: string[];
    muted?: string[];
    interests?: string[];
    hasClaimedName: boolean;
    avatar: AvatarInfo;
    /**
     * Whether or not the player has connected web3 wallet or is a guest user.
     * This is always true for deployed profiles.
     */
    hasConnectedWeb3?: boolean;
};

/**
 * Avatar
 * @alpha
 */
export declare namespace Avatar {
    const schema: JSONSchema<Avatar>;
    const validate: ValidateFunction<Avatar>;
}

/**
 * AvatarInfo
 * @alpha
 */
export declare type AvatarInfo = {
    bodyShape: WearableId;
    eyes: {
        color: Color3;
    };
    hair: {
        color: Color3;
    };
    skin: {
        color: Color3;
    };
    wearables: WearableId[];
    emotes?: {
        slot: number;
        urn: string;
    }[];
    snapshots: Snapshots;
};

/**
 * AvatarInfo
 * @alpha
 */
export declare namespace AvatarInfo {
    const schema: JSONSchema<AvatarInfo>;
    const validate: ValidateFunction<AvatarInfo>;
}

/**
 * @public
 *
 * Describes common properties to an item of a collection.
 */
declare type BaseItem = DisplayableDeployment & {
    id: string;
    name: string;
    description: string;
    i18n: I18N[];
    thumbnail: string;
    image: string;
    metrics?: Metrics;
};

export declare type Bid = {
    id: string;
    bidAddress: string;
    bidder: string;
    seller: string;
    price: string;
    fingerprint: string;
    status: ListingStatus;
    blockchainId: string;
    blockNumber: string;
    expiresAt: number;
    createdAt: number;
    updatedAt: number;
    contractAddress: string;
    tokenId: string;
    network: Network;
    chainId: ChainId;
};

export declare namespace Bid {
    const schema: JSONSchema<Bid>;
    const validate: ValidateFunction<Bid>;
}

export declare type BidFilters = {
    first?: number;
    skip?: number;
    sortBy?: BidSortBy;
    bidAddress?: string;
    bidder?: string;
    seller?: string;
    contractAddress?: string;
    tokenId?: string;
    status?: ListingStatus;
    network?: Network;
};

export declare enum BidSortBy {
    RECENTLY_OFFERED = "recently_offered",
    RECENTLY_UPDATED = "recently_updated",
    MOST_EXPENSIVE = "most_expensive"
}

/** @alpha */
export declare enum BodyShape {
    MALE = "urn:decentraland:off-chain:base-avatars:BaseMale",
    FEMALE = "urn:decentraland:off-chain:base-avatars:BaseFemale"
}

/** @alpha */
export declare namespace BodyShape {
    const schema: JSONSchema<BodyShape>;
    const validate: ValidateFunction<BodyShape>;
}

/**
 * Different supported chain ids
 * @alpha
 */
export declare enum ChainId {
    ETHEREUM_MAINNET = 1,
    ETHEREUM_ROPSTEN = 3,
    ETHEREUM_RINKEBY = 4,
    ETHEREUM_GOERLI = 5,
    ETHEREUM_KOVAN = 42,
    MATIC_MAINNET = 137,
    MATIC_MUMBAI = 80001
}

/**
 * @alpha
 */
export declare namespace ChainId {
    const schema: JSONSchema<ChainId>;
    const validate: ValidateFunction<ChainId>;
}

/**
 * Different supported chain names
 * @alpha
 */
export declare enum ChainName {
    ETHEREUM_MAINNET = "Ethereum Mainnet",
    ETHEREUM_ROPSTEN = "Ropsten",
    ETHEREUM_RINKEBY = "Rinkeby",
    ETHEREUM_GOERLI = "Goerli",
    ETHEREUM_KOVAN = "Kovan",
    MATIC_MAINNET = "Polygon",
    MATIC_MUMBAI = "Mumbai"
}

/**
 * @alpha
 */
export declare namespace ChainName {
    const schema: JSONSchema<ChainName>;
    const validate: ValidateFunction<ChainName>;
}

export declare type Collection = {
    urn: string;
    name: string;
    creator: string;
    contractAddress: string;
    isOnSale: boolean;
    size: number;
    createdAt: number;
    updatedAt: number;
    reviewedAt: number;
    network: Network;
    chainId: ChainId;
};

export declare namespace Collection {
    const schema: JSONSchema<Collection>;
    const validate: ValidateFunction<Collection>;
}

export declare type CollectionFilters = {
    first?: number;
    skip?: number;
    sortBy?: CollectionSortBy;
    name?: string;
    search?: string;
    creator?: string;
    contractAddress?: string;
    urn?: string;
    isOnSale?: boolean;
    network?: Network;
};

export declare enum CollectionSortBy {
    NEWEST = "newest",
    NAME = "name",
    RECENTLY_REVIEWED = "recently_reviewed",
    SIZE = "size"
}

/**
 * Color3 is a data type that describes a color using R, G and B components
 * @alpha
 */
export declare type Color3 = {
    r: number;
    g: number;
    b: number;
};

/**
 * Color3
 * @alpha
 */
export declare namespace Color3 {
    const schema: JSONSchema<Color3>;
    const validate: ValidateFunction<Color3>;
}

/**
 * Represents a content mapping. The Decentraland file system is
 * case-insensitive. `file` must be lower cased.
 *
 * Duplicated files will throw a validation error.
 *
 * .file is a relative path
 * .hash is a valid IPFS hash.
 *
 * @public
 */
export declare type ContentMapping = {
    file: string;
    hash: IPFSv1 | IPFSv2;
};

/** @public */
export declare namespace ContentMapping {
    const schema: JSONSchema<ContentMapping>;
    const validate: ValidateFunction<ContentMapping>;
}

export declare type Contract = {
    name: string;
    address: string;
    category: NFTCategory;
    network: Network;
    chainId: ChainId;
};

export declare namespace Contract {
    const schema: JSONSchema<Contract>;
    const validate: ValidateFunction<Contract>;
}

export declare type ContractFilters = {
    category?: NFTCategory;
    network?: Network;
};

export declare enum ContractSortBy {
    NAME = "name"
}

/**
 * This type describes the minimum deployment + AuthChain needed to synchronize
 * a deployed entity across catalysts.
 * @public
 */
export declare type DeploymentWithAuthChain = {
    entityId: string;
    entityType: string;
    pointers: string[];
    localTimestamp: number;
    authChain: AuthChain;
};

/**
 * @public
 */
export declare namespace DeploymentWithAuthChain {
    const schema: JSONSchema<DeploymentWithAuthChain>;
    const validate: ValidateFunction<DeploymentWithAuthChain>;
}

/**
 * @public
 *
 * Describes common properties to display deployments.
 */
export declare type DisplayableDeployment = {
    /** Name of the file used as icon for the MenuBar */
    menuBarIcon?: string;
};

/** @alpha */
export declare type Emote = EmoteADR74;

/** @alpha */
export declare namespace Emote {
    const schema: JSONSchema<Emote>;
    const validate: ValidateFunction<EmoteADR74>;
}

declare type EmoteADR74 = BaseItem & (StandardProps | ThirdPartyProps) & {
    emoteDataADR74: EmoteDataADR74;
};

export declare enum EmoteCategory {
    DANCE = "dance",
    STUNT = "stunt",
    GREETINGS = "greetings",
    FUN = "fun",
    POSES = "poses",
    REACTIONS = "reactions",
    HORROR = "horror",
    MISCELLANEOUS = "miscellaneous"
}

export declare namespace EmoteCategory {
    const schema: JSONSchema<EmoteCategory>;
    const validate: ValidateFunction<EmoteCategory>;
}

export declare type EmoteDataADR74 = {
    category: EmoteCategory;
    representations: EmoteRepresentationADR74[];
    tags: string[];
    loop: boolean;
};

export declare namespace EmoteDataADR74 {
    const schema: JSONSchema<EmoteDataADR74>;
    const validate: ValidateFunction<EmoteDataADR74>;
}

export declare type EmoteDefinition = Omit<Emote, 'emoteDataADR74'> & {
    emoteDataADR74: Omit<Emote['emoteDataADR74'], 'representations'> & {
        representations: EmoteRepresentationDefinition[];
    };
};

declare type EmoteEventPayload<T extends PreviewEmoteEventType> = T extends PreviewEmoteEventType.ANIMATION_PLAYING ? {
    length: number;
} : undefined;

export declare enum EmotePlayMode {
    SIMPLE = "simple",
    LOOP = "loop"
}

export declare namespace EmotePlayMode {
    const schema: JSONSchema<EmotePlayMode>;
    const validate: ValidateFunction<EmotePlayMode>;
}

/** @alpha */
export declare type EmoteRepresentationADR74 = {
    bodyShapes: BodyShape[];
    mainFile: string;
    contents: string[];
};

/** @alpha */
export declare namespace EmoteRepresentationADR74 {
    const schema: JSONSchema<EmoteRepresentationADR74>;
    const validate: ValidateFunction<EmoteRepresentationADR74>;
}

/** @alpha */
export declare type EmoteRepresentationDefinition = Omit<EmoteRepresentationADR74, 'contents'> & {
    contents: {
        key: string;
        url: string;
    }[];
};

/** @alpha */
export declare type EmoteRepresentationWithBlobs = Omit<EmoteRepresentationDefinition, 'contents'> & {
    contents: {
        key: string;
        blob: any;
    }[];
};

/** @alpha */
export declare type EmoteWithBlobs = Omit<EmoteDefinition, 'emoteDataADR74'> & {
    emoteDataADR74: Omit<EmoteDefinition['emoteDataADR74'], 'representations'> & {
        representations: EmoteRepresentationWithBlobs[];
    };
};

/**
 * Internal representation of an entity in the catalyst.
 *
 * This Entity's content mappings adhere to ADR45.
 *
 * @public
 */
export declare type Entity = {
    /** @deprecated ADR45 removed entity versions. */
    version: string;
    id: IPFSv1 | IPFSv2;
    type: EntityType;
    pointers: string[];
    timestamp: number;
    content: ContentMapping[];
    metadata?: any;
};

/** @public */
export declare namespace Entity {
    const schema: JSONSchema<Entity>;
    const validate: ValidateFunction<Entity>;
}

/**
 * Non-exhaustive list of EntityTypes.
 * @public
 */
export declare enum EntityType {
    SCENE = "scene",
    PROFILE = "profile",
    WEARABLE = "wearable",
    STORE = "store",
    EMOTE = "emote"
}

/**
 * EthAddress is a data type that describes an Ethereum address
 * @alpha
 */
export declare type EthAddress = string;

/**
 * EthAddress
 * @alpha
 */
export declare namespace EthAddress {
    const schema: JSONSchema<EthAddress>;
    const validate: ValidateFunction<EthAddress>;
}

/** @alpha */
export declare type FeatureToggles = Record<string, 'enabled' | 'disabled'>;

/** @alpha */
export declare namespace FeatureToggles {
    const schema: JSONSchema<FeatureToggles>;
    const validate: ValidateFunction<FeatureToggles>;
}

/**
 * Generates a validator for a specific JSON schema of a type T
 * @public
 */
export declare function generateLazyValidator<T>(schema: JSONSchema<T>, keywordDefinitions?: KeywordDefinition[]): ValidateFunction<T>;

/**
 * Get chain id by chain name
 * @alpha
 */
export declare function getChainId(chainName: ChainName): ChainId | null;

/**
 * Get the chain name by chain id
 * @alpha
 */
export declare function getChainName(chainId: ChainId): ChainName | null;

/**
 * Get the chain name by chain id
 * @alpha
 */
export declare function getURNProtocol(chainId: ChainId): string;

/**
 * Get World
 * @alpha
 */
export declare function getWorld(): World;

/** @alpha */
export declare type I18N = {
    code: Locale;
    text: string;
};

/** @alpha */
export declare namespace I18N {
    const schema: JSONSchema<I18N>;
    const validate: ValidateFunction<I18N>;
}

export declare interface IEmoteController {
    getLength(): Promise<number>;
    isPlaying(): Promise<boolean>;
    goTo(seconds: number): Promise<void>;
    play(): Promise<void>;
    pause(): Promise<void>;
    stop(): Promise<void>;
    events: any;
}

/**
 * @public
 */
export declare type IPFSv1 = string;

/**
 * IPFSv1
 * @public
 */
export declare namespace IPFSv1 {
    const schema: JSONSchema<IPFSv1>;
    const validate: ValidateFunction<IPFSv1>;
}

/**
 * IPFSv2 is a data type that describes an IPFS v2 hash
 * @public
 */
export declare type IPFSv2 = string;

/**
 * IPFSv2
 * @public
 */
export declare namespace IPFSv2 {
    const schema: JSONSchema<IPFSv2>;
    const validate: ValidateFunction<IPFSv2>;
}

export declare interface IPreviewController {
    scene: ISceneController;
    emote: IEmoteController;
}

export declare interface ISceneController {
    getScreenshot(width: number, height: number): Promise<string>;
    getMetrics(): Promise<Metrics>;
    changeZoom(zoom: number): Promise<void>;
    panCamera(offset: {
        x?: number;
        y?: number;
        z?: number;
    }): Promise<void>;
    changeCameraPosition(position: {
        alpha?: number;
        beta?: number;
        radius?: number;
    }): Promise<void>;
}

/**
 * Check if is inside World Limits
 * @alpha
 */
export declare function isInsideWorldLimits(x: number, y: number): boolean;

export declare function isStandard<T extends BaseItem>(item: T): item is T & StandardProps;

export declare function isThirdParty<T extends BaseItem>(item: T): item is T & ThirdPartyProps;

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

export declare namespace Item {
    const schema: JSONSchema<Item>;
    const validate: ValidateFunction<Item>;
}

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

/**
 * This type alias exist only to avoid accidental refactors involving names of ajv
 * @public
 */
export declare type JSONSchema<T> = JSONSchemaType<T>;

export declare enum ListingStatus {
    OPEN = "open",
    SOLD = "sold",
    CANCELLED = "cancelled"
}

export declare namespace ListingStatus {
    const schema: JSONSchema<ListingStatus>;
    const validate: ValidateFunction<ListingStatus>;
}

/** @alpha */
export declare enum Locale {
    EN = "en",
    ES = "es"
}

/** @alpha */
export declare namespace Locale {
    const schema: JSONSchema<Locale>;
    const validate: ValidateFunction<Locale>;
}

/**
 * Merkle Proof
 * @alpha
 */
export declare type MerkleProof = {
    proof: string[];
    index: number;
    hashingKeys: string[];
    entityHash: string;
};

/**
 * Merkle Proof
 * @alpha
 */
export declare namespace MerkleProof {
    const schema: JSONSchema<MerkleProof>;
    const validate: ValidateFunction<MerkleProof>;
}

/** @public */
declare type Messages = SceneUpdate | Update;

/**
 * Meta-transaction to be relayed
 * @alpha
 */
export declare type MetaTransaction = {
    from: string;
    params: [string, string];
};

/**
 * @alpha
 */
export declare namespace MetaTransaction {
    const schema: JSONSchema<MetaTransaction>;
    const validate: ValidateFunction<MetaTransaction>;
}

/** @alpha */
export declare type Metrics = {
    triangles: number;
    materials: number;
    textures: number;
    meshes: number;
    bodies: number;
    entities: number;
};

/** @alpha */
export declare namespace Metrics {
    const schema: JSONSchema<Metrics>;
    const validate: ValidateFunction<Metrics>;
}

export declare type Mint = {
    id: string;
    creator: string;
    beneficiary: string;
    minter: string;
    itemId: string;
    tokenId: string;
    issuedId: string;
    contractAddress: string;
    price: string | null;
    timestamp: number;
    network: Network;
    chainId: ChainId;
};

export declare namespace Mint {
    const schema: JSONSchema<Mint>;
    const validate: ValidateFunction<Mint>;
}

export declare type MintFilters = {
    first?: number;
    skip?: number;
    sortBy?: MintSortBy;
    creator?: string;
    beneficiary?: string;
    minter?: string;
    contractAddress?: string;
    itemId?: string;
    tokenId?: string;
    issuedId?: string;
    isSale?: boolean;
    network?: Network;
};

export declare enum MintSortBy {
    RECENTLY_MINTED = "recently_minted",
    MOST_EXPENSIVE = "most_expensive"
}

declare type MultiPosition = {
    x: number[];
    y: number[];
    z: number[];
};

/**
 * Different supported networks
 * @alpha
 */
export declare enum Network {
    ETHEREUM = "ETHEREUM",
    MATIC = "MATIC"
}

/**
 * @alpha
 */
export declare namespace Network {
    const schema: JSONSchema<Network>;
    const validate: ValidateFunction<Network>;
}

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

export declare namespace NFT {
    const schema: JSONSchema<NFT>;
    const validate: ValidateFunction<NFT>;
}

export declare enum NFTCategory {
    PARCEL = "parcel",
    ESTATE = "estate",
    WEARABLE = "wearable",
    ENS = "ens",
    EMOTE = "emote"
}

export declare namespace NFTCategory {
    const schema: JSONSchema<NFTCategory>;
    const validate: ValidateFunction<NFTCategory>;
}

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

export declare type Order = {
    id: string;
    marketplaceAddress: string;
    contractAddress: string;
    tokenId: string;
    owner: string;
    buyer: string | null;
    price: string;
    status: ListingStatus;
    expiresAt: number;
    createdAt: number;
    updatedAt: number;
    network: Network;
    chainId: ChainId;
};

export declare namespace Order {
    const schema: JSONSchema<Order>;
    const validate: ValidateFunction<Order>;
}

export declare type OrderFilters = {
    first?: number;
    skip?: number;
    sortBy?: OrderSortBy;
    marketplaceAddress?: string;
    owner?: string;
    buyer?: string;
    contractAddress?: string;
    tokenId?: string;
    status?: ListingStatus;
    network?: Network;
};

export declare enum OrderSortBy {
    RECENTLY_LISTED = "recently_listed",
    RECENTLY_UPDATED = "recently_updated",
    CHEAPEST = "cheapest"
}

/**
 * The input that is required to create a rental listing period.
 */
export declare type PeriodCreation = {
    /** The minimum amount of days of the period */
    minDays: number;
    /** The maximum amount of days of the period */
    maxDays: number;
    /** The price per day */
    pricePerDay: string;
};

export declare namespace PeriodCreation {
    const schema: JSONSchemaType<PeriodCreation>;
    const validate: ValidateFunction<PeriodCreation>;
}

export declare enum PreviewCamera {
    STATIC = "static",
    INTERACTIVE = "interactive"
}

/** @alpha */
export declare namespace PreviewCamera {
    const schema: JSONSchema<PreviewCamera>;
    const validate: ValidateFunction<PreviewCamera>;
}

export declare type PreviewConfig = {
    item?: WearableDefinition | EmoteDefinition;
    wearables: WearableDefinition[];
    bodyShape: BodyShape;
    skin: string;
    hair: string;
    eyes: string;
    zoom: number;
    type: PreviewType;
    face: boolean;
    background: {
        image?: string;
        color: string;
        transparent: boolean;
    };
    emote: PreviewEmote | null;
    camera: PreviewCamera;
    projection: PreviewProjection;
    autoRotateSpeed: number;
    centerBoundingBox: boolean;
    fadeEffect: boolean;
    showSceneBoundaries?: boolean;
    showThumbnailBoundaries?: boolean;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    cameraX: number;
    cameraY: number;
    cameraZ: number;
    wheelZoom: number;
    wheelPrecision: number;
    wheelStart: number;
};

export declare enum PreviewEmote {
    IDLE = "idle",
    CLAP = "clap",
    DAB = "dab",
    DANCE = "dance",
    FASHION = "fashion",
    FASHION_2 = "fashion-2",
    FASHION_3 = "fashion-3",
    FASHION_4 = "fashion-4",
    LOVE = "love",
    MONEY = "money",
    FIST_PUMP = "fist-pump",
    HEAD_EXPLODE = "head-explode"
}

/** @alpha */
export declare namespace PreviewEmote {
    const schema: JSONSchema<PreviewEmote>;
    const validate: ValidateFunction<PreviewEmote>;
}

export declare enum PreviewEmoteEventType {
    ANIMATION_PLAY = "animation_play",
    ANIMATION_PAUSE = "animation_pause",
    ANIMATION_LOOP = "animation_loop",
    ANIMATION_END = "animation_end",
    ANIMATION_PLAYING = "animation_playing"
}

/** @alpha */
export declare namespace PreviewEmoteEventType {
    const schema: JSONSchema<PreviewEmoteEventType>;
    const validate: ValidateFunction<PreviewEmoteEventType>;
}

export declare type PreviewMessagePayload<T extends PreviewMessageType> = T extends PreviewMessageType.READY ? null : T extends PreviewMessageType.LOAD ? null : T extends PreviewMessageType.ERROR ? {
    message: string;
} : T extends PreviewMessageType.UPDATE ? {
    options: PreviewOptions;
} : T extends PreviewMessageType.CONTROLLER_REQUEST ? {
    id: string;
    namespace: 'scene' | 'emote';
    method: 'getScreenshot' | 'getMetrics' | 'changeZoom' | 'changeCameraPosition' | 'panCamera' | 'getLength' | 'isPlaying' | 'play' | 'pause' | 'stop' | 'goTo';
    params: any[];
} : T extends PreviewMessageType.CONTROLLER_RESPONSE ? {
    id: string;
    ok: true;
    result: any;
} | {
    id: string;
    ok: false;
    error: string;
} : T extends PreviewMessageType.EMOTE_EVENT ? {
    type: PreviewEmoteEventType;
    payload: EmoteEventPayload<PreviewEmoteEventType>;
} : unknown;

export declare enum PreviewMessageType {
    READY = "ready",
    LOAD = "load",
    ERROR = "error",
    UPDATE = "update",
    CONTROLLER_REQUEST = "controller_request",
    CONTROLLER_RESPONSE = "controller_response",
    EMOTE_EVENT = "emote_event"
}

/** @alpha */
export declare namespace PreviewMessageType {
    const schema: JSONSchema<PreviewMessageType>;
    const validate: ValidateFunction<PreviewMessageType>;
}

/** @alpha */
export declare type PreviewOptions = {
    contractAddress?: string | null;
    tokenId?: string | null;
    itemId?: string | null;
    profile?: string | null;
    bodyShape?: BodyShape | null;
    skin?: string | null;
    hair?: string | null;
    eyes?: string | null;
    urns?: string[] | null;
    urls?: string[] | null;
    base64s?: string[] | null;
    blob?: WearableWithBlobs | EmoteWithBlobs | null;
    zoom?: number | null;
    emote?: PreviewEmote | null;
    camera?: PreviewCamera | null;
    projection?: PreviewProjection | null;
    autoRotateSpeed?: number | null;
    offsetX?: number | null;
    offsetY?: number | null;
    offsetZ?: number | null;
    cameraX?: number | null;
    cameraY?: number | null;
    cameraZ?: number | null;
    wheelZoom?: number | null;
    wheelPrecision?: number | null;
    wheelStart?: number | null;
    background?: string | null;
    disableBackground?: boolean | null;
    disableAutoCenter?: boolean | null;
    disableAutoRotate?: boolean | null;
    disableFace?: boolean | null;
    disableDefaultWearables?: boolean | null;
    disableDefaultEmotes?: boolean | null;
    disableFadeEffect?: boolean | null;
    showSceneBoundaries?: boolean;
    showThumbnailBoundaries?: boolean;
    peerUrl?: string | null;
    nftServerUrl?: string | null;
};

export declare enum PreviewProjection {
    ORTHOGRAPHIC = "orthographic",
    PERSPECTIVE = "perspective"
}

export declare namespace PreviewProjection {
    const schema: JSONSchema<PreviewProjection>;
    const validate: ValidateFunction<PreviewProjection>;
}

/** @alpha */
export declare enum PreviewType {
    TEXTURE = "texture",
    WEARABLE = "wearable",
    AVATAR = "avatar"
}

/** @alpha */
export declare namespace PreviewType {
    const schema: JSONSchema<PreviewType>;
    const validate: ValidateFunction<PreviewType>;
}

/**
 * Profile containing one or multiple avatars
 * @alpha
 */
export declare type Profile = {
    avatars: Avatar[];
};

/**
 * Profile
 * @alpha
 */
export declare namespace Profile {
    const schema: JSONSchema<Profile>;
    const validate: ValidateFunction<Profile>;
}

/** @public */
declare enum ProjectType {
    SCENE = "scene",
    SMART_ITEM = "smart-item",
    PORTABLE_EXPERIENCE = "portable-experience",
    LIBRARY = "library"
}

/** @public */
declare namespace ProjectType {
    const schema: JSONSchema<ProjectType>;
    const validate: ValidateFunction<ProjectType>;
}

/**
 * Different supported providers
 * @alpha
 */
export declare enum ProviderType {
    INJECTED = "injected",
    FORTMATIC = "formatic",
    NETWORK = "network",
    WALLET_CONNECT = "wallet_connect",
    WALLET_LINK = "wallet_link"
}

/**
 * @alpha
 */
export declare namespace ProviderType {
    const schema: JSONSchema<ProviderType>;
    const validate: ValidateFunction<ProviderType>;
}

export declare enum Rarity {
    UNIQUE = "unique",
    MYTHIC = "mythic",
    LEGENDARY = "legendary",
    EPIC = "epic",
    RARE = "rare",
    UNCOMMON = "uncommon",
    COMMON = "common"
}

export declare namespace Rarity {
    const schema: JSONSchema<Rarity>;
    const validate: ValidateFunction<Rarity>;
    export function getMaxSupply(rarity: Rarity): number;
    export function getColor(rarity: Rarity): string;
    export function getGradient(rarity: Rarity): [string, string];
}

/**
 * A rental listing.
 */
export declare type RentalListing = {
    /** The ID of the rental listing in the signature server */
    id: string;
    /** The NFT token ID */
    nftId: string;
    /** The category of the NFT being rented */
    category: NFTCategory;
    /** The blockchain search text of the NFT asset */
    searchText: string;
    /** The network where the asset being rented is on */
    network: Network;
    /** The chain id where the asset being rented is on */
    chainId: ChainId;
    /** UTC timestamp in milliseconds since epoch of the signature's expiration */
    expiration: number;
    /** A hex string representation of the rental signature */
    signature: string;
    /** A string representation of the nonces, the first nonce is the contract's nonce, the second one is the signer's nonce and the third is the asset's nonce */
    nonces: string[];
    /** The NFT token id */
    tokenId: string;
    /** The contract address of the NFT */
    contractAddress: string;
    /** The contract address of the rentals contract */
    rentalContractAddress: string;
    /** The address of the lessor */
    lessor: string | null;
    /** The address of the tenant */
    tenant: string | null;
    /** The status of the rental */
    status: RentalStatus;
    /** UTC timestamp in milliseconds since epoch of the time the signature was created */
    createdAt: number;
    /** UTC timestamp in milliseconds since epoch of the time the signature was updated */
    updatedAt: number;
    /** UTC timestamp in milliseconds since epoch of the time the rental started */
    startedAt: number | null;
    /** The periods of the rental */
    periods: RentalListingPeriod[];
    /** The target address that can use the signature. If no target is wanted, the zero address will be used  */
    target: string;
    /** The amount of days the land was rented for. NULL if it's in open or cancel status  */
    rentedDays: number | null;
};

/**
 * The input that is required to create a rental listing.
 */
export declare type RentalListingCreation = {
    /** The network where the asset being rented is on */
    network: Network;
    /** The chain id where the asset being rented is on */
    chainId: ChainId;
    /** UTC timestamp in milliseconds since epoch of the signature's expiration */
    expiration: number;
    /** A hex string representation of the rental signature */
    signature: string;
    /** The NFT token id */
    tokenId: string;
    /** The contract address of the NFT */
    contractAddress: string;
    /** The contract address of the rentals contract */
    rentalContractAddress: string;
    /** A string representation of the nonces, the first nonce is the contract's nonce, the second one is the signer's nonce and the third is the asset's nonce */
    nonces: string[];
    /** The periods of the rental */
    periods: PeriodCreation[];
    /** The target address that can use the signature. If no target is wanted, use the zero address  */
    target: string;
};

export declare namespace RentalListingCreation {
    const schema: JSONSchema<RentalListingCreation>;
    const validate: ValidateFunction<RentalListingCreation>;
}

/**
 * A period of a rental listing.
 */
export declare type RentalListingPeriod = {
    /** The minimum amount of days of the period */
    minDays: number;
    /** The maximum amount of days of the period */
    maxDays: number;
    /** The price per day */
    pricePerDay: string;
};

/**
 * All the possible parameters that a rental can be filtered for.
 */
export declare type RentalsListingsFilterBy = {
    /** The category of the NFT being rented */
    category?: RentalsListingsFilterByCategory;
    /** The blockchain search text of the NFT asset */
    text?: string;
    /** The listing status or statuses of the NFT asset rental */
    status?: RentalStatus | RentalStatus[];
    /** The periods of the rental listings the NFT assets where put for rent */
    periods?: RentalsListingsFilterByPeriod;
    /** The address of the lessor who put the NFT asset for rent */
    lessor?: string;
    /** The address of the tenant who rented the NFT asset */
    tenant?: string;
    /** The token id of the NFT asset that was put for rent */
    tokenId?: string;
    /** The contract address of the NFT asset that was put for rent  */
    contractAddresses?: string[];
    /** The network of the NFT that was put for rent */
    network?: Network;
    /** The NFT ids of the NFT assets that were put for rent */
    nftIds?: string[];
};

/**
 * All the possible NFT categories of a rental listing.
 */
export declare enum RentalsListingsFilterByCategory {
    PARCEL = "parcel",
    ESTATE = "estate"
}

/**
 * All the possible parameters that a rental can be filtered for based on their periods.
 */
export declare type RentalsListingsFilterByPeriod = {
    /** The minimum amount of days of the period */
    minDays: number;
    /** The maximum amount of days of the period */
    maxDays: number;
    /** The price per day */
    pricePerDay?: number;
};

/**
 * All the possible sort directions.
 */
export declare enum RentalsListingSortDirection {
    ASC = "asc",
    DESC = "desc"
}

/**
 * All the possible parameters that a rental listing can be sorted by.
 */
export declare enum RentalsListingsSortBy {
    /** Order by created at of the listing's metadata */
    LAND_CREATION_DATE = "land_creation_date",
    /** Order by created at of the listing */
    RENTAL_LISTING_DATE = "rental_listing_date",
    /** Order by rented at of the listing */
    RENTAL_DATE = "rented_date",
    /** Order by search text of the listing's metadata */
    NAME = "name",
    /** Order by maximum rental price per day of the listing */
    MAX_RENTAL_PRICE = "max_rental_price",
    /** Order by minimum rental price per day of the listing */
    MIN_RENTAL_PRICE = "min_rental_price"
}

/**
 * All the possible rental statuses.
 * (This will be merged into ListingStatus eventually)
 */
export declare enum RentalStatus {
    OPEN = "open",
    CANCELLED = "cancelled",
    EXECUTED = "executed",
    CLAIMED = "claimed"
}

export declare type Sale = {
    id: string;
    type: SaleType;
    buyer: string;
    seller: string;
    itemId: string | null;
    tokenId: string;
    contractAddress: string;
    price: string;
    timestamp: number;
    txHash: string;
    network: Network;
    chainId: ChainId;
};

export declare namespace Sale {
    const schema: JSONSchema<Sale>;
    const validate: ValidateFunction<Sale>;
}

export declare type SaleFilters = {
    first?: number;
    skip?: number;
    sortBy?: SaleSortBy;
    type?: SaleType;
    categories?: NFTCategory[];
    buyer?: string;
    seller?: string;
    contractAddress?: string;
    itemId?: string;
    tokenId?: string;
    from?: number;
    to?: number;
    minPrice?: string;
    maxPrice?: string;
    network?: Network;
};

export declare enum SaleSortBy {
    RECENTLY_SOLD = "recently_sold",
    MOST_EXPENSIVE = "most_expensive"
}

export declare enum SaleType {
    ORDER = "order",
    BID = "bid",
    MINT = "mint"
}

export declare namespace SaleType {
    const schema: JSONSchema<SaleType>;
    const validate: ValidateFunction<SaleType>;
}

/** @alpha */
export declare type Scene = DisplayableDeployment & {
    main: string;
    scene: SceneParcels;
    display?: {
        title?: string;
        /** @deprecated use menuBarIcon instead */
        favicon?: string;
        description?: string;
        navmapThumbnail?: string;
    };
    owner?: string;
    contact?: {
        name?: string;
        email?: string;
        im?: string;
        url?: string;
    };
    tags?: string[];
    source?: Source;
    spawnPoints?: SpawnPoint[];
    requiredPermissions?: string[];
    featureToggles?: FeatureToggles;
};

/** @alpha */
export declare namespace Scene {
    const schema: JSONSchema<Scene>;
    const validate: ValidateFunction<Scene>;
}

/** @public */
declare const SCENE_UPDATE = "SCENE_UPDATE";

/** @alpha */
export declare type SceneParcels = {
    base: string;
    parcels: string[];
};

/** @alpha */
export declare namespace SceneParcels {
    const schema: JSONSchema<SceneParcels>;
    const schemaValidator: ValidateFunction<SceneParcels>;
    const validate: ValidateFunction<SceneParcels>;
}

/** @public */
declare type SceneUpdate = {
    type: typeof SCENE_UPDATE;
    payload: {
        sceneId: string;
        sceneType: string;
    };
};

/** @public */
declare namespace SceneUpdate {
    const schema: JSONSchema<SceneUpdate>;
    const validate: ValidateFunction<SceneUpdate>;
}

declare namespace sdk {
    export {
        Actions,
        Messages,
        SCENE_UPDATE,
        SceneUpdate,
        UPDATE,
        Update,
        ProjectType,
        WearableJson
    }
}
export { sdk }

export declare const sendMessage: <T extends PreviewMessageType>(window: {
    postMessage(event: any, targetOrigin: string): any;
}, type: T, payload: PreviewMessagePayload<T>, targetOrigin?: string) => void;

declare type SinglePosition = {
    x: number;
    y: number;
    z: number;
};

/**
 * Snapshots
 * @alpha
 */
export declare type Snapshots = {
    face256: IPFSv2;
    body: IPFSv2;
};

/**
 * Snapshots
 * @alpha
 */
export declare namespace Snapshots {
    const schema: JSONSchema<Snapshots>;
    const validate: ValidateFunction<Snapshots>;
}

/** @alpha */
export declare type Source = {
    version?: number;
    origin: string;
    projectId: string;
    point?: {
        x: number;
        y: number;
    };
    rotation?: 'north' | 'east' | 'south' | 'west';
    layout?: {
        rows: number;
        cols: number;
    };
    isEmpty?: boolean;
};

/** @alpha */
export declare namespace Source {
    const schema: JSONSchema<Source>;
    const validate: ValidateFunction<Source>;
}

/** @alpha */
export declare type SpawnPoint = {
    name?: string;
    position: SinglePosition | MultiPosition;
    default?: boolean;
    cameraTarget?: SinglePosition;
};

/** @alpha */
export declare namespace SpawnPoint {
    const schema: JSONSchema<SpawnPoint>;
    const validate: ValidateFunction<SpawnPoint>;
}

export declare type StandardProps = {
    collectionAddress: string;
    rarity: Rarity;
};

export declare type Store = {
    id: string;
    owner: string;
    description: string;
    links: {
        name: string;
        url: string;
    }[];
    images: {
        name: string;
        file: string;
    }[];
    version: number;
};

export declare namespace Store {
    const schema: JSONSchema<Store>;
    const validate: ValidateFunction<Store>;
}

export declare type ThirdPartyProps = {
    merkleProof: MerkleProof;
    content: Record<string, string>;
};

/** @public @deprecated */
declare const UPDATE = "update";

/** @public @deprecated */
declare type Update = {
    type: typeof UPDATE;
};

/** @public @deprecated */
declare namespace Update {
    const schema: JSONSchema<Update>;
    const validate: ValidateFunction<Update>;
}

/**
 * This type is a subset of AJV's ValidateFunction, it exists to make
 * .d.ts bundles smaller and to not expose all of AJV context to the
 * world.
 * @public
 */
export declare interface ValidateFunction<T = unknown> {
    (this: any, data: any, dataCxt?: any): data is T;
    errors?: null | ErrorObject[];
}

/**
 * Validates a type with a schema in a functional way.
 * @public
 */
export declare function validateType<T>(theType: Pick<AbstractTypedSchema<T>, 'validate'>, value: T): boolean;

/**
 * World Range
 * @alpha
 */
export declare type ValidWorldRange = {
    xMin: number;
    yMin: number;
    xMax: number;
    yMax: number;
};

/** @alpha */
export declare type Wearable = BaseItem & {
    data: {
        replaces: WearableCategory[];
        hides: WearableCategory[];
        tags: string[];
        representations: WearableRepresentation[];
        category: WearableCategory;
    };
} & (StandardProps | ThirdPartyProps);

/** @alpha */
export declare namespace Wearable {
    const schema: JSONSchema<Wearable>;
    /**
     * Validates that the wearable metadata complies with the standard or third party wearable, and doesn't have repeated locales.
     * Some fields are defined as optional but those are validated to be present as standard XOR third party:
     *  Standard Wearables should contain:
     *    - collectionAddress
     *    - rarity
     *  Third Party Wearables should contain:
     *    - merkleProof
     *    - content
     */
    const validate: ValidateFunction<Wearable>;
}

export declare enum WearableCategory {
    EYEBROWS = "eyebrows",
    EYES = "eyes",
    FACIAL_HAIR = "facial_hair",
    HAIR = "hair",
    HEAD = "head",
    BODY_SHAPE = "body_shape",
    MOUTH = "mouth",
    UPPER_BODY = "upper_body",
    LOWER_BODY = "lower_body",
    FEET = "feet",
    EARRING = "earring",
    EYEWEAR = "eyewear",
    HAT = "hat",
    HELMET = "helmet",
    MASK = "mask",
    TIARA = "tiara",
    TOP_HEAD = "top_head",
    SKIN = "skin"
}

export declare namespace WearableCategory {
    const schema: JSONSchema<WearableCategory>;
    const validate: ValidateFunction<WearableCategory>;
}

/** @alpha */
export declare type WearableDefinition = Omit<Wearable, 'data'> & {
    data: Omit<Wearable['data'], 'representations'> & {
        representations: WearableRepresentationDefinition[];
    };
};

export declare enum WearableGender {
    MALE = "male",
    FEMALE = "female"
}

export declare namespace WearableGender {
    const schema: JSONSchema<WearableGender>;
    const validate: ValidateFunction<WearableGender>;
}

/**
 * @alpha
 */
export declare type WearableId = string;

/**
 * @alpha
 */
declare type WearableJson = Pick<Wearable, 'data' | 'name' | 'description'> & {
    rarity: Rarity;
};

/**
 * @alpha
 */
declare namespace WearableJson {
    const schema: JSONSchema<WearableJson>;
    const validate: ValidateFunction<WearableJson>;
}

/** @alpha */
export declare type WearableRepresentation = {
    bodyShapes: BodyShape[];
    mainFile: string;
    contents: string[];
    overrideHides: WearableCategory[];
    overrideReplaces: WearableCategory[];
};

/** @alpha */
export declare namespace WearableRepresentation {
    const schema: JSONSchema<WearableRepresentation>;
    const validate: ValidateFunction<WearableRepresentation>;
}

/** @alpha */
export declare type WearableRepresentationDefinition = Omit<WearableRepresentation, 'contents'> & {
    contents: {
        key: string;
        url: string;
    }[];
};

/** @alpha */
export declare type WearableRepresentationWithBlobs = Omit<WearableRepresentationDefinition, 'contents'> & {
    contents: {
        key: string;
        blob: any;
    }[];
};

/** @alpha */
export declare type WearableWithBlobs = Omit<WearableDefinition, 'data'> & {
    data: Omit<WearableDefinition['data'], 'representations'> & {
        representations: WearableRepresentationWithBlobs[];
    };
};

/**
 * World
 * @alpha
 */
export declare type World = {
    validWorldRanges: Array<ValidWorldRange>;
};

/**
 * @alpha
 */
export declare namespace World {
    const schema: JSONSchema<World>;
    const validate: ValidateFunction<World>;
}

export { }
