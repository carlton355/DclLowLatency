### Test Scene - Just a Video Screen

#### Test Purpose

Test the components correctly display video.

#### Pre-requisites

You'll need a published WebRTC video stream. Know the **url** and the **streamId** for the stream. 

#### Steps

In a new folder. Clone the DclLowLatency repo.

**We run this test in WSL2.**
```
git clone https://github.com/carlton355/DclLowLatency
```

Clone the decentraland kernel repo.

```
git clone https://github.com/decentraland/Kernel
```

Switch to the version of the kernel used for SDK 6.11.10

```
cd kernel
git checkout c5115764918c744c8b6bd4c502277b3b536d92f8
```

Install dependencies. Run install inside the kernel folder.

```
npm install
```

Copy the contents of the kernel-patch folder from the DclLowLatency repo. This will prompt to replace files in the kernel repo with the patch files.
Use explorer or use your paths: Use your paths. For example: 

```
copy path files and overwrite
```

Create a sym link between the videoscene and the kernel so that the SDK scene used the new patched kernel. Don't run npm install in the Videodcene folder. Patched node_modules are already included.

```
cd videoscene
npm link

cd kernel
npm link /home/user/dcl-readme-test/DclLowLatency/videoscene        # your path.
```

Ensure your video stream is running. Then add your video credentials to the scene game.ts file.

```
cd videoscene
code .        # opens vs code
```

Edit the VideoRealtimeTexture to add your URL and streamId. An game.ts we tested is provided in this folder for reference. Save changes and exit.

Now we run the new local kernel and start the scene.

```
cd kernel
make watch
```
Wait until the kernel builds fully.

```
cd videoscene
dcl start
```

#### Outcome

When the scene starts. You observe your avatar, a large rectangular plane and a cube. No video is showing.
The cube is clickable. Interact with the cube and the video will start.

Observe your video.
The test passes.
