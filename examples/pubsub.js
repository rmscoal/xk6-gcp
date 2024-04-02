import { Gcp } from "k6/x/gcp";

const jsonKey = JSON.parse(open("credentials.json"));

const gcp = new Gcp({
  key: jsonKey,
  scope: ["https://www.googleapis.com/auth/pubsub"],
});
export default function () {
  const t = gcp.pubsubTopic("xxx");
  const msgId = gcp.pubsubPublish(t, { foo: "bar" });
  // or you can do
  // const msgId = gcp.pubsubPublishBinary(t, new Uint8Array([1, 2, 3]));
  console.log(msgId);

  const s = gcp.pubsubSubscription("xxx");
  const list = gcp.pubsubReceive(s);
  console.log(list);
}
