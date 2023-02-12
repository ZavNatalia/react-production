import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildMOptions} from "./types/config";

export function buildPlugins({paths}: BuildMOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}