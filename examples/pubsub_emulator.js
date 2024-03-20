import { Gcp } from "k6/x/gcp";

const gcp = new Gcp({
  emulatorHost: "localhost:8085",
  projectId: "project-id",
});
export default function () {
  const t = gcp.pubsubTopic("xxx");
  const msgId = gcp.pubsubPublish(t, { foo: "bar" });
  console.log(msgId);

  const s = gcp.pubsubSubscription("xxx");
  const list = gcp.pubsubReceive(s);
  console.log(list);
}
