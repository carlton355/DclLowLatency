import { JSONSchema, ValidateFunction } from '../../validation';
import { PreviewEmoteEventType } from './preview-emote-event-type';
import { EmoteEventPayload } from './preview-emote-event-payload';
import { PreviewOptions } from './preview-options';
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
export declare const sendMessage: <T extends PreviewMessageType>(window: {
    postMessage(event: any, targetOrigin: string): any;
}, type: T, payload: PreviewMessagePayload<T>, targetOrigin?: string) => void;
//# sourceMappingURL=preview-message.d.ts.map