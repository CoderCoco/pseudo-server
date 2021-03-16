import "reflect-metadata";

import { IpcClient } from "./ipc-client";

(async (): Promise<void> => {
  const client = new IpcClient();

  await client.connectToServer();
})();
