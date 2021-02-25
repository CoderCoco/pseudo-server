import { CliModule } from "./cli-module";
import { Launcher } from "./launcher";

const cliModule = new CliModule();

const launcher = cliModule.container.get(Launcher);
launcher.launch();