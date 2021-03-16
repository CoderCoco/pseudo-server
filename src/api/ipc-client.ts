import { fork } from "child_process";
import path from "path";
import { IpcServer } from "../ipc-server";

/* eslint-disable @typescript-eslint/no-unsafe-member-access -- The node-ipc process fails to adhere to this rule.*/
/* eslint-disable @typescript-eslint/no-unsafe-call -- The node-ipc process fails to adhere to this rule.*/

export class IpcClient {
  public static readonly START_PATH = "/tmp/MockServerIPC";

  private static readonly WAIT_TIME = 5000;

  // Unable to use the import syntax for node IPC as this causes some errors in the function code itself.
  // eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-unsafe-assignment -- See above
  private readonly ipc = require("node-ipc");

  public async connectToServer(): Promise<void> {
    this.ipc.config.retry = 1000;

    return new Promise((resolve) => {
      fork(path.join(__dirname, "../ipc-server/runner.ts"), ["launch-ipc", IpcClient.START_PATH]);

      setTimeout(() => {
        this.ipc.connectTo(IpcServer.SERVER_ID, IpcClient.START_PATH, () => {
          console.log("connected");

          resolve();
        });
      }, IpcClient.WAIT_TIME);
    });
  }
}
