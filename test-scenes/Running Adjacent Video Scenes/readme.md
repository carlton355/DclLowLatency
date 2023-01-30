### Test Scene - Running Adjacent Vodeo Scenes

#### Test Purpose

Test adjacent scenes, each running video.

#### Pre-requisites

You'll need a two published WebRTC video streams. Know the server **url** and the two **streamId** for the streams. 

#### Steps

In a new folder. Clone the DclLowLatency repo.

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

Prepare the kernel for sym linking.

```
cd Kernel/static
npm link
```

Build the kernel with the new patched files.
```
cd kernel
make watch
```
Wait until the kernel builds fully.
Then stop the server. Ctrl-C.

Now we setup two scenes using the workspaces functionality from the SDK.

Create a top level folder and inside create two scene:

```
mkdir "Running Two Adjacent Scenes"
cd "Running Two Adjacent Scenes"

mkdir Scene1
cd Scene1
dcl init -- choose Scene, Cube spawner
```

At the same level create Scene2

```
mkdir Scene2
cd Scene2
dcl init -- choose Scene, Cube spawner
```

Overrite the generated Cube spawener files with the game.ts files provided in the report for this test scene.

Then in the top level folder run:

```
dcl workspaces init
```

This will enable us to run both Scene1 and Scene2 in a single world. You can test it by running 'dcl start' in the top level folder. you should see two scenes running.

Next we need to patch the files to run the new Realtime components.

Copy the contents of the 'patch files' folder into the top level folder. This will overwrite files in the node_modules folder for all three projects.

Edit the game.ts files in Scene1 and Scene2 and add your url and streamIds for your files.

Run in the top level folder

In the Scene1, Scene2 and in the top level folder run the following command. This sim links the three projects to the kernel.

```
npm link @dcl/kernel

```
dcl start
```

#### Outcome

When the scene starts. You observe your avatar, two large rectangular planes and a cube for each plane. No video is showing.
The cubes are clickable. Interact with the cubes and the videos will start.

Observe the two videos.
The test passes.
