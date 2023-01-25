### Test Scene - Low Latency Test

#### Test Purpose

Test Video Latency.

#### Pre-requisites

You'll need a published WebRTC video stream. Know the **url** and the **streamId** for the stream.
For this test we publish a clock. Using OBS Video publishing we can add a Browser to the Sources pane and set the URL to a world clock. "https://time.is/".
Also in OBS, do the following:

Settings -> Output -> Output Mode => Advanced
Settings -> Streaming (tab) -> Tune => ZeroLatency

#### Steps

Follow the Steps in the "Just a Video Screen" test to get the new time video running.

#### Outcome

When the scene starts. You observe your avatar, a large rectangular plane and a cube. No video is showing.
The cube is clickable. Interact with the cube and the video will start.

The video displays a time. Organize your workspace so you can see both the original time in OBS and also the time in the decentrland scene.

Observe your video time on OBS and in Decentraland. Compare the second transitions and judge the latency.
Worst case latency should be < 1s.
The test passes.

Troubleshooting

A well tuned setup can deliver <200ms latency. There are many factors that can slow it down to around 1 second. 

1) Internet conditions.
2) Quality of bandwidth out of your streaming server host.
3) Resources on the streaming server.
4) Resources on the desktop publishing the stream.
5) Resources on the desktop running the DCL client.

