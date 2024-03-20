
import { Gcp } from "k6/x/gcp";

const gcp = new Gcp({
  emulator_host: "localhost:8085",
  project_id: "example-project",
});
export default function() {
  const t = gcp.pubsubTopic("xxx");
  const msgId = gcp.pubsubPublish(t, { foo: "bar" });
  console.log(msgId);

  const s = gcp.pubsubSubscription("xxx");
  const list = gcp.pubsubReceive(s);
  console.log(list);
}
