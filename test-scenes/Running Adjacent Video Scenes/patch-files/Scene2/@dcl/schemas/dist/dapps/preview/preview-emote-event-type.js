"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewEmoteEventType = void 0;
const validation_1 = require("../../validation");
var PreviewEmoteEventType;
(function (PreviewEmoteEventType) {
    PreviewEmoteEventType["ANIMATION_PLAY"] = "animation_play";
    PreviewEmoteEventType["ANIMATION_PAUSE"] = "animation_pause";
    PreviewEmoteEventType["ANIMATION_LOOP"] = "animation_loop";
    PreviewEmoteEventType["ANIMATION_END"] = "animation_end";
    PreviewEmoteEventType["ANIMATION_PLAYING"] = "animation_playing";
})(PreviewEmoteEventType = exports.PreviewEmoteEventType || (exports.PreviewEmoteEventType = {}));
/** @alpha */
(function (PreviewEmoteEventType) {
    PreviewEmoteEventType.schema = {
        type: 'string',
        enum: Object.values(PreviewEmoteEventType)
    };
    PreviewEmoteEventType.validate = (0, validation_1.generateLazyValidator)(PreviewEmoteEventType.schema);
})(PreviewEmoteEventType = exports.PreviewEmoteEventType || (exports.PreviewEmoteEventType = {}));
//# sourceMappingURL=preview-emote-event-type.js.map