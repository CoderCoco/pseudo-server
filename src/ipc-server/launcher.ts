import { injectable } from "inversify";
import { IpcServer } from "./ipc-server";

@injectable()
export class Launcher {
  constructor(private readonly ipcServer: IpcServer) {
    console.log("args and ipcserver defined");
  }

  public launch(): void {
    console.log("starting the IPC server");
    this.ipcServer.startServer();
  }
}
