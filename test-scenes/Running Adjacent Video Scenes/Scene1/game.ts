const stream = new VideoRealtimeStream("https://stream.yourserver.net:5443/WebRTCAppEE/", "89654B1F-C18F-4B8D-91BC-74F653069154", "AntMediaEnterprise");
const videoTexture = new VideoRealtimeTexture(stream);

const material = new Material();
const entity = new Entity();

material.albedoTexture = videoTexture;

const planeShape = new PlaneShape();
entity.addComponent(planeShape);
entity.addComponent(material);

entity.addComponent(new Transform({
  position: new Vector3(8, 2.2, 8),
  scale: new Vector3(5, 4.2, 1)
}));

engine.addEntity(entity);

const myEntity = new Entity()
myEntity.addComponent(new BoxShape())

myEntity.addComponent(
  new OnPointerDown((e) => {
    log("myEntity was clicked", e);
    videoTexture.play();
  })
)

myEntity.addComponent(new Transform({
  position: new Vector3(8, 0.5, 4)
}));

engine.addEntity(myEntity);