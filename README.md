# Ultra Low Latency Video Streaming Components

These components allow Video Streaming into Decentraland at Ultra Low Latency (<500ms). The project was funded by a grant from the Decentraland Community. Details [here](https://governance.decentraland.org/proposal/?id=858cd0a0-0c18-11ed-92a2-218eab5ea42b).

Ultra Low Latency Video enables a number of applications that are not possible with higher latency video streams.

### Project Scope

Streaming low latency video into Decentraland requires three destinct steps:

1. Setup a streaming server capable of attaining low latency.
2. Setup your desired video stream in a broadcasting application such as OBS and point it at the server.
3. Setup components in your Decentraland scene that can receive the stream and render in the world.

The scope of this project delivers the components required for step three.

For information on compatible servers see here.
For information on setting up OBS see here.

Note that the VideoTexture component in the Decentraland SDK cannot render Ultra Low Latency streams. The protocols they support typically operate on a 10-15 second delay. The DclLowLatency components support sub 500ms latency.

### Users

Decentraland Scene Builders can be characterized as SDK users and Builder users. Or coders and non-coders. The project aims to satisfy both user's needs.

### Supported Decentraland SDK

The components were developed with Decentraland SDK (decentraland-ecs) 6.11.10

### Audience

If you are a Decentraland SDK user and just want to try the components then skip to the section on testing here.
If you are more interested in the internals and wish to code review or contribute somehow - then welcome! - there's lots of additional information here for you too.

### Requirements

An early initial survey of SDK users revealed the following requirements.

**Usability:** The component interfaces should be easy to configure for the Scene Builders. Consider also, users will span from small hobby scenes to large scale events streaming from high grade commercial services. 

**Performance:** A stream should not overly impact performance of scene rendering. Furthermore, all streams being rendered in adjacent land plots must not overly impact performance.

**Multi Platform:** Although the current project focuses on the Decentraland Web Explorer feasibility into support route for the Desktop platform should also be considered.  WebRTC is native on iOS and Android.

**Security:** Streams should be secure perhaps with the option of a JWT token for access. 

### WebRTC

WebRTC was selected as the supported protocol. It is a free and open source project originally initiated by Google. It handles video in a fundementally different way from other streaming protocols, achieves the target latency and is available across many devices.

#### Standards and Open Source

The main tech to be considered is WebRTC which supports ultra-low latency video. In 2021, WebRTC 1.0 became a World Wide Web Consortium (W2C) recommendation4. WebRTC is available under the BSD license and is free and open source.

### Architectural Approach

One of the main aims of the architecture is to hide the complications of the WebRTC protocol from the user. WebRTC uses signaling servers, stun servers and a moderately complex protocol that we do not want to bother the user with.

We first introduce two new components to the SDK to handle realtime streams.

**VideoRealtimeTexture:** A new component in the Unity Renderer project that provides the texture capable of rendering the video. It is based on the standard Video texture component and has some differences around configuration and extra communication messagaes with the Decentraland Kernel.

**VideoRealtimeStream:** This is a configuration object used to hold data used for setting up the stream connections.

This is best illustrated by comparing the current SDK VideoTexture and VideoClip and the new VideoRealtimeTexture and VideoRealtimeStream components.

```typescript
const video = new VideoClip("video/up.mp4");
const videoTexture = new VideoTexture(video);
```
For the realtime version we simply do this:

```typescript
// url:string, streamId:string, providerName:string
const stream = new VideoRealtimeStream("https://stream.decentralandlive.net/WebRTCAppEE/", "89654B1F-C18F-4B8D-91BC-74F653069154", "AntMediaEnterprise");
const videoTexture = new VideoRealtimeTexture(stream);
```














