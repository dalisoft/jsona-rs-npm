import { prepare, maps } from "binary2npm";

maps.os.linux = "linux-musl";

await prepare({
  remote: "github",
  author: "jsona",
  repository: "jsona",
  remoteToken: process.env.GITHUB_TOKEN,
  binary: "jsona",
  usePackageJson: true,
});
