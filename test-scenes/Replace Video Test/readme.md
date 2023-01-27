### Test Scene - Simple Resource Test

#### Test Purpose

To test whether the video stream cleans up correctly when it is disposed.

#### Pre-requisites

You'll need a published WebRTC video stream. Know the **url** and the **streamId** for the stream.
For this test we can publish any video.

#### Steps

Follow the Steps in the "Just a Video Screen" test to get a video stream running.

#### Outcome

When the scene starts. You observe your avatar, a large rectangular plane and a cube. No video is showing.
The cube is clickable. Interact with the cube and the video will start.

Open the Chrome developer tools. Observer the following resources are up and running:

1. A video element is present in the DOM: Open the Elements tab in the Chrome developer tools and examine the html DOM. A video html element is running as present as a child of the main 'body' element. Observe it has an id attribute with a stringified 64 bit pointer of the form: similar to b64-L2hvbWUvY2FybDM1NS9ybS10ZXN0L0RjbExvd0xhdGVuY3kvdmlkZW9zY2VuZQ==Ce (your value will be different.)
2. Observe regular bitrate messages in the Console tab.
3. Observe the video is playing on the screen in-world.

Now, leaving the developer tools open, with your avatar, run far away in the world to a value such as (0, 12). This will cause the sample scene to be destroyed.

Observe the following:

1. The html video tag is no longer in the html (check the Elements tab in the browser development tools).
2. Observe the following messages in the Console: (your numbers will be different)

sent message:{"command":"stop","streamId":"898681913277907905407347"} [This indicates the stream was stopped.]
rtcvideo.debug: closing web socket for b64-L2hvbWUvY2FybDM1NS9ybS10ZXN0L0RjbExvd0xhdGVuY3kvdmlkZW9zY2VuZQ==Ce. [This indicates a request was made to close the web socket for this stream.]
{debug: true, providers: {…}, streams: {…}, getProvider: ƒ} [The streams collection should now we empty]
connection closed. [The connection to the server was closed.]
Clearing ping message timer [The keep alive ping-pong message timer was stopped as the connection to the server was closed for this stream.]

The test passes.

