import { Color3, EthAddress, IPFSv2, WearableId } from '../../misc';
import { JSONSchema, ValidateFunction } from '../../validation';
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
//# sourceMappingURL=avatar.d.ts.map