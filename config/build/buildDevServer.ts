import {BuildMOptions} from "./types/config";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildMOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true
    }
}