import { Container } from "inversify";
import "reflect-metadata";
import { ProcessArgs } from "./process-args";
import { IpcServer } from "./ipc-server";
import { Launcher } from "./launcher";

export class CliModule {
  public readonly container = new Container();

  constructor() {
    this.container.bind<ProcessArgs>(ProcessArgs).to(ProcessArgs);
    this.container.bind<IpcServer>(IpcServer).to(IpcServer);
    this.container.bind<Launcher>(Launcher).to(Launcher);
  }
}
