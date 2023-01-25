### Test Scene - Throttling Test

#### Test Purpose

Because playing video is a resource hungry operation, in Decentraland, we throttle video when the avatar steps off the land where the video is playing.
Audio is also muted when the avatar steps off the land. (We don't want to hear video from adjacent land plots.)
This test checks these two operations.

#### Pre-requisites

We publish a video with an audio track. Follow the instuctions in "Audio Test" as the setup is identical to what is required here.

#### Steps

1. When the video starts, with your Avatar, walk around the land and note the video and audio is playing as normal.
2. Walk off your land and into an adjacent plot while still watching the video screen.
3. Observe the differences in audio and video when you are off-land vs on-land.

#### Outcome

When you are on-land you hear high quality stereo sound in sync with the video and the video is playing normally.

When you are off-land the video performance is 'throttled' it updates frames at a much lower rate and looks choppy.
Also when you step off land, the audio is muted. You no longer hear the audio track on the video.

The test passes.

Troubleshooting

When you step off-land the 'mute' can take a little time to be actioned depending on how busy the system is. 