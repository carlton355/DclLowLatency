import { JSONSchema, ValidateFunction } from '../../validation';
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
//# sourceMappingURL=preview-emote-event-type.d.ts.map