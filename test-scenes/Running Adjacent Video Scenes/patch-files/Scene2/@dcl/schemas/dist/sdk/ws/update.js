"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = exports.UPDATE = void 0;
const validation_1 = require("../../validation");
/** @public @deprecated */
exports.UPDATE = 'update';
/** @public @deprecated */
var Update;
(function (Update) {
    Update.schema = {
        type: 'object',
        properties: {
            type: {
                type: 'string',
                enum: [exports.UPDATE]
            }
        },
        required: ['type']
    };
    Update.validate = (0, validation_1.generateLazyValidator)(Update.schema);
})(Update = exports.Update || (exports.Update = {}));
//# sourceMappingURL=update.js.map