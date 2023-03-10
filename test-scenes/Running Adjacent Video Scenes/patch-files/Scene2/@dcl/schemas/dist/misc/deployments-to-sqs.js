"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentToSqs = void 0;
const validation_1 = require("../validation");
const auth_chain_1 = require("./auth-chain");
/**
 * @public
 */
var DeploymentToSqs;
(function (DeploymentToSqs) {
    DeploymentToSqs.schema = {
        type: 'object',
        required: ['entity'],
        properties: {
            entity: {
                type: 'object',
                required: ['entityId', 'authChain'],
                properties: {
                    entityId: { type: 'string' },
                    authChain: auth_chain_1.AuthChain.schema
                },
                additionalProperties: true
            },
            contentServerUrls: {
                type: 'array',
                items: { type: 'string' },
                nullable: true
            }
        },
        additionalProperties: true
    };
    DeploymentToSqs.validate = (0, validation_1.generateLazyValidator)(DeploymentToSqs.schema);
})(DeploymentToSqs = exports.DeploymentToSqs || (exports.DeploymentToSqs = {}));
//# sourceMappingURL=deployments-to-sqs.js.map