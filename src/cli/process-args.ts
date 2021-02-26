import { injectable } from "inversify";
import * as yargs from "yargs";

type YargsChain = yargs.Argv | typeof yargs;

@injectable()
export class ProcessArgs {
  public readonly ipcPath: string;

  public constructor() {
    let argProcessor: YargsChain = yargs;

    argProcessor = argProcessor.demandCommand();
    argProcessor = ProcessArgs.buildIpcCommand(argProcessor);

    const argv = argProcessor.argv;

    this.ipcPath = argv.ipcPath as string;
  }

  private static buildIpcCommand(chain: YargsChain): yargs.Argv {
    return chain.command("launch-ipc [ipc-path]", "Start the server and connect to an ipc port", (yargsPos) => {
      yargsPos.positional("ipc-path", {
        describe: "The IPC path to bind on",
        demandOption: true
      });
    });
  }
}
