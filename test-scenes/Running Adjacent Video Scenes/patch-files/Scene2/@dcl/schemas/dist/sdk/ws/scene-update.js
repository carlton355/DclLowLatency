"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneUpdate = exports.SCENE_UPDATE = void 0;
const validation_1 = require("../../validation");
/** @public */
exports.SCENE_UPDATE = 'SCENE_UPDATE';
/** @public */
var SceneUpdate;
(function (SceneUpdate) {
    SceneUpdate.schema = {
        type: 'object',
        properties: {
            type: {
                type: 'string',
                enum: [exports.SCENE_UPDATE]
            },
            payload: {
                type: 'object',
                properties: {
                    sceneId: {
                        type: 'string'
                    },
                    sceneType: {
                        type: 'string'
                    }
                },
                additionalProperties: false,
                required: ['sceneId', 'sceneType']
            }
        },
        required: ['payload', 'type']
    };
    SceneUpdate.validate = (0, validation_1.generateLazyValidator)(SceneUpdate.schema);
})(SceneUpdate = exports.SceneUpdate || (exports.SceneUpdate = {}));
//# sourceMappingURL=scene-update.js.map