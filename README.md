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

#### Main SDK Components

We first introduce two new components to the SDK to handle realtime streams.

**VideoRealtimeTexture:** A new component in the Unity Renderer project that provides the texture capable of rendering the video. It is based on the standard Video texture component and has some differences around configuration and extra communication messagaes with the Decentraland Kernel.

**VideoRealtimeStream:** This is a configuration object used to hold data used for setting up the stream connections.

This is best illustrated by comparing the current SDK VideoTexture and VideoClip and the new VideoRealtimeTexture and VideoRealtimeStream components.

```typescript
const video = new VideoClip("video/up.mp4");
const videoTexture = new VideoTexture(video);
```
For the realtime version we do this instead:

```typescript
// url:string, streamId:string, providerName:string
const stream = new VideoRealtimeStream("https://stream.decentralandlive.net/WebRTCAppEE/", "89654B1F-C18F-4B8D-91BC-74F653069154", "AntMediaEnterprise");
const videoTexture = new VideoRealtimeTexture(stream);
```
This keeps a similar experience for the SDK user.

**Unity WebVideoPlayer**: The Unity WebVideoPlayer plugin was changed to handles WebRTC streams within the Unity Plug in WebVideoPlayer.jslib.

#### Performance

Our research showed that pushing the rendering down to base OS level gave much better performance results than trying to handle WebRTC from within the scene.

#### The Provider Model

There are a number of WebRTC Servers available. Some are free and open source such as Janus WebRTC Server while others are high end platform services such as Wowza.  It is also expected that users of the components will likely range from small hobby users up to larger corporate events, perhaps with tens of thousands of users.

To support a range of different servers we have introduced a provider model where each supported server needs to implement an interface for connection and resource handling. The provider also handles connections to stun servers, signaling and the WebRTC protocol.

We have chosen to implement a provider for Ant Media Server Enterprise because it is our preferred WebRTC server. It is commercial grade but can also be setup relatively cost effectively within AWS or Azure for live events. They are expensive to run 24/7. It can also scale up to tens of thousands of viewers.

It is expected that other servers will be implemented by the community, with Janus WebRTC looking like a popular choice for the second provider to be implemented. Janus WebRTC is free and open source.

```javascript
// The WebRTC client provider model
class AntMediaEnterpriseProvider
{
  // returns the name of the provider
  get name() {
    return "AntMediaEnterprise";
  }

  // load any assets such as loading scripts into the dom. 
  ensureLoaded(){
    ...
  }

  // unload assets
  ensureUnloaded(){
    ...
  }

  // initialize and create the stream
  createStream(url, streamId, videoId){
    ...
  }

  // destroy the stream when component is destroyed.
  destroyStream(videoId){
    ...
  }
}
```

#### Kernel Messages
The new Unity components communicate with the Browser throught the Unity Web Interface. They essentially send setup and tear down messages to instruct the system to load and destroy the providers.  Play and stop messaged are handled throught the WebVideoPlayer via a video tag in the browser which then connects to the underlying WebRTC implementation in the browser.

#### Security
A provider specific security mechanism may be available to ensure playing of streams only when the use is authorized. The Decentraland scene can be setup to call an API to issue the token. This is an advanced feature and we will support it in the AntMediaEnterprise provider.

### Test Cases and Test Scenes

This following test scenes and scenarios are in development. Here is their status:

| Test Case Title   | Developed    |  Status       | Link |
| ---    | ---   | ---     | --- |
| Just a Video Screen | In Development | &#10060; | ... |
| Audio Test | In Development | &#10060; | ... |
| Replace Video Test | In Development | &#10060; | ... |
| Running Adjacent Video Scenes | In Development | &#10060; | ... |
| Throttling Test | In Development | &#10060; | ... |
| Two Scenes Spaced Across the World | In Development | &#10060; | ... |
| Security Test with JWT | In Development | &#10060; | ... |

### Licensing Considerations

There may be licensing considerations with using sample connection code from WebRTC server vendors in the provider libraries.

### Areas needing improvement and/or support from the Decentraland Development Team

- Since the project spans several Decentraland githb projects (Unity Renderer, Kernel, Kernel Interface) we seek advice on how best to handle checkins.
- We have made some "on the fly" changes to some of the javascript code generated by external processes. These will need to be correctly checked-in to the correct place in the correct repository.
- The code in the Preview.html in the Kernel project needs a home. It needs to run in the context of the browser but we probably don't want to have it polluting the WebBrowser code. At the very least I think it should probably be loaded on demand from somewhere into a <script> tag.

### Running a Test Scene with the Realtime Components

These components are not yet an offical part of the SDK. If you'd like to run the sample code, use this process. Don't run ***npm install*** on the files as all the node modules are already included and some have been modified for this test.

First ensure you have a stream that you are running. See here if you don't have a stream.
You'll need to be running the Decentraland SDK version 6.11.10

Clone the repo:

```
 git clone https://github.com/carlton355/dcllowlatency
```

Navigate to the Kernel folder and run ***make watch***. Wait until it completes.
We run this inside WSL2 on Ubuntu.
```
 make watch
```

Navigate to the VideoScene folder and edit the VideoRealtimeStream constructor. Add your url, streamId.
```
code .
```
look for the SDK code file src/game.ts in the explorer pane.

Save your changes and run:
```
dcl start
```

You should see a blank black screen on a preview scene. Click the block to start the video. 
  
#### Getting a Stream

I am able to run a test server for anyone testing this. You can buzz me on Discord for details.

Otherwise, an Ant Media Enterprise Server is available in the Azure market place. It sets up a VM that can be held in 'unallocated' state to save cost and put live for testing on demand.  Let me know if you want any instructions on exactly how to do that and I will add instuctions in this repo.

#### Using OBS to publish a stream

Get [OBS](https://obsproject.com/download). Install it.

Go to **Settings > Stream** choose Service:Custom, Server:"rtmp://yourserverdomain.com/WebRTCAppEE/" you are publishing your stream over rtmp. Add your streamid to the Stream Key: <your stream key> field.

If you are looking for content, try adding a Browser entry to the Sources pane in OBS and add something like "https://time.is" which gives a live World Clock time which is interesting for eyeballing a latency test.
  
***Important for best results*** Tell OBS to optimize for Low Latency. Go to Output > Output Mode:Advanced and set the Tune:ZeroLatency dropdown.
  
### Writing a new Provider.
  
Anyone who wants a mew provider will need the following to get started.

  - Have access to a deployment of the WebRTC server for testing.
  - Setup a test page in a basic HTML page with a <video> tag that displays a published live WebRTC stream with ultra low latency.
  - Isolate the setup logic.
  - Write the provider. You can follow the example in the codebase for the AntMediaServer provider file.
  
### Next Steps

- Checking in the code to the main Decentraland codebase.
- Writing a second WebRTC Provider perhaps for Janus WebRTC Server.
- SDK7 version
- Creating a Smart Item with the new SDK7 smart items when it is available.
  
