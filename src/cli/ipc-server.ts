import { injectable } from "inversify";
import { ProcessArgs } from "./process-args";

@injectable()
export class IpcServer {
  constructor(private readonly processArgs: ProcessArgs){}

  public startServer() {
    console.log('starting server on', this.processArgs.ipcPath);
  }
}