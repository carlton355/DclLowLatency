### Test Scene - Just a Video Screen

#### Test Purpose

Test the components correctly display video.

#### Pre-requisites

You'll need a published WebRTC video stream. Know the **url** and the **streamId** for the stream. 

#### Steps

In a new folder. Clone the DclLowLatency repo.

```
git clone https://github.com/carlton355/DclLowLatency
```
Ensure your video stream is running. Then add your video credentials to the scene game.ts file.

```
cd videoscene
code .        # opens vs code
```

Edit the VideoRealtimeTexture to add your URL and streamId. An game.ts we tested is provided in this folder for reference. Save changes and exit.

In the videoscene folder run:
```
dcl start
```

#### Outcome

When the scene starts. You observe your avatar, a large rectangular plane and a cube. No video is showing.
The cube is clickable. Interact with the cube and the video will start.

Observe your video.
The test passes.
