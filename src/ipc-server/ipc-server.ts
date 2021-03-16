import { injectable } from "inversify";
import { ReplaySubject } from "rxjs";
import { ProcessArgs } from "./process-args";

/* eslint-disable @typescript-eslint/no-unsafe-member-access -- The node-ipc process fails to adhere to this rule.*/
/* eslint-disable @typescript-eslint/no-unsafe-call -- The node-ipc process fails to adhere to this rule.*/

@injectable()
export class IpcServer {
  public static readonly SERVER_ID = "MockServerCommunicationServer";

  public readonly isServerStarted = new ReplaySubject(1);

  // Unable to use the import syntax for node IPC as this causes some errors in the function code itself.
  // eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-unsafe-assignment -- See above
  private readonly ipc = require("node-ipc");

  constructor(private readonly processArgs: ProcessArgs) {
    // Default the replay subject to false
    this.isServerStarted.next(false);
  }

  public startServer(): void {
    console.log("starting server on", this.processArgs.ipcPath);

    this.ipc.config.id = IpcServer.SERVER_ID;
    this.ipc.config.retry = 1500;

    this.ipc.serve(this.processArgs.ipcPath, () => {
      console.log("Server created", this.ipc.config);

      this.isServerStarted.next(true);
    });

    this.ipc.server.start();
  }
}
