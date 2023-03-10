"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
const validation_1 = require("../../validation");
const displayable_1 = require("../shared/displayable");
const feature_toggles_1 = require("./feature-toggles");
const scene_parcels_1 = require("./scene-parcels");
const source_1 = require("./source");
const spawn_point_1 = require("./spawn-point");
/** @alpha */
var Scene;
(function (Scene) {
    Scene.schema = {
        type: 'object',
        properties: Object.assign(Object.assign({ main: {
                description: "File that contains the entry point of the scene's code",
                type: 'string',
                minLength: 1
            }, scene: scene_parcels_1.SceneParcels.schema }, displayable_1.displayableProperties), { display: {
                description: 'Information related to how should this land be displayed apart from the normal rendering of the scene',
                type: 'object',
                properties: {
                    title: {
                        description: 'A name so other users can identify what the contents of this land should be',
                        type: 'string',
                        nullable: true
                    },
                    favicon: {
                        description: 'DEPRECATED. Allow the land owner to set up a favicon to this land',
                        type: 'string',
                        nullable: true
                    },
                    description: {
                        description: "A description that will be shown on client's nav map when the scene is selected",
                        type: 'string',
                        nullable: true
                    },
                    navmapThumbnail: {
                        type: 'string',
                        nullable: true
                    }
                },
                nullable: true,
                required: []
            }, owner: {
                type: 'string',
                nullable: true
            }, contact: {
                description: 'Describe different ways of contacting the land owner',
                type: 'object',
                properties: {
                    name: { type: 'string', nullable: true },
                    email: { type: 'string', nullable: true },
                    im: { type: 'string', nullable: true },
                    url: { type: 'string', nullable: true }
                },
                nullable: true,
                required: []
            }, tags: {
                type: 'array',
                items: {
                    type: 'string',
                    minLength: 1
                },
                nullable: true
            }, source: Object.assign(Object.assign({}, source_1.Source.schema), { nullable: true }), spawnPoints: {
                type: 'array',
                items: spawn_point_1.SpawnPoint.schema,
                nullable: true
            }, requiredPermissions: {
                type: 'array',
                items: {
                    type: 'string'
                },
                nullable: true
            }, featureToggles: Object.assign(Object.assign({}, feature_toggles_1.FeatureToggles.schema), { nullable: true }) }),
        additionalProperties: true,
        required: ['main', 'scene']
    };
    Scene.validate = (0, validation_1.generateLazyValidator)(Scene.schema);
})(Scene = exports.Scene || (exports.Scene = {}));
//# sourceMappingURL=scene.js.map