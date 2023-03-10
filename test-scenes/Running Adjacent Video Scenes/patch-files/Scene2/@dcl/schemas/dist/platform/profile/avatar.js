"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = exports.AvatarInfo = exports.Snapshots = void 0;
const misc_1 = require("../../misc");
const validation_1 = require("../../validation");
/**
 * Snapshots
 * @alpha
 */
var Snapshots;
(function (Snapshots) {
    Snapshots.schema = {
        type: 'object',
        required: ['face256', 'body'],
        properties: {
            face256: misc_1.IPFSv2.schema,
            body: misc_1.IPFSv2.schema
        }
    };
    Snapshots.validate = (0, validation_1.generateLazyValidator)(Snapshots.schema);
})(Snapshots = exports.Snapshots || (exports.Snapshots = {}));
/**
 * AvatarInfo
 * @alpha
 */
var AvatarInfo;
(function (AvatarInfo) {
    AvatarInfo.schema = {
        type: 'object',
        required: ['bodyShape', 'eyes', 'hair', 'skin'],
        properties: {
            bodyShape: {
                type: 'string'
            },
            eyes: {
                type: 'object',
                required: ['color'],
                properties: {
                    color: misc_1.Color3.schema
                }
            },
            hair: {
                type: 'object',
                required: ['color'],
                properties: {
                    color: misc_1.Color3.schema
                }
            },
            skin: {
                type: 'object',
                required: ['color'],
                properties: {
                    color: misc_1.Color3.schema
                }
            },
            wearables: {
                type: 'array',
                items: {
                    type: 'string'
                }
            },
            emotes: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        slot: { type: 'number' },
                        urn: { type: 'string' }
                    },
                    required: ['slot', 'urn']
                },
                nullable: true
            },
            snapshots: Snapshots.schema
        },
        additionalProperties: true
    };
    AvatarInfo.validate = (0, validation_1.generateLazyValidator)(AvatarInfo.schema);
})(AvatarInfo = exports.AvatarInfo || (exports.AvatarInfo = {}));
/**
 * Avatar
 * @alpha
 */
var Avatar;
(function (Avatar) {
    Avatar.schema = {
        type: 'object',
        required: [
            'name',
            'description',
            'ethAddress',
            'version',
            'tutorialStep',
            'avatar'
        ],
        properties: {
            userId: {
                type: 'string'
            },
            name: {
                type: 'string'
            },
            description: {
                type: 'string'
            },
            ethAddress: misc_1.EthAddress.schema,
            version: {
                type: 'number'
            },
            tutorialStep: {
                type: 'number'
            },
            email: {
                type: 'string',
                nullable: true
            },
            blocked: {
                type: 'array',
                items: {
                    type: 'string'
                },
                nullable: true
            },
            muted: {
                type: 'array',
                items: {
                    type: 'string'
                },
                nullable: true
            },
            interests: {
                type: 'array',
                items: {
                    type: 'string'
                },
                nullable: true
            },
            hasClaimedName: {
                type: 'boolean',
                nullable: true
            },
            hasConnectedWeb3: {
                type: 'boolean',
                nullable: true
            },
            avatar: AvatarInfo.schema
        },
        additionalProperties: true
    };
    Avatar.validate = (0, validation_1.generateLazyValidator)(Avatar.schema);
})(Avatar = exports.Avatar || (exports.Avatar = {}));
//# sourceMappingURL=avatar.js.map