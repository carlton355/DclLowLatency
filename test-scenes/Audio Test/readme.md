### Test Scene - Audio Test

#### Test Purpose

Test Video Stereo Audio.

#### Pre-requisites

You'll need a published WebRTC video stream. Know the **url** and the **streamId** for the stream.
For this test we publish a stero audio track. Using OBS Video publishing we can add a Media Source to the Sources pane and set to a local file. We use a high quality stereo movie (Pixar Up).
In OBS, ensure you are publishing in stereo:

Settings -> Audio -> Channels => Stereo
Settings -> Streaming (tab) -> Tune => ZeroLatency

#### Steps

Follow the Steps in the "Just a Video Screen" test to get the new time video running.

#### Outcome

When the scene starts. You observe your avatar, a large rectangular plane and a cube. No video is showing.
The cube is clickable. Interact with the cube and the video will start.

You hear high quality stereo sound in sync with the video.

The test passes.