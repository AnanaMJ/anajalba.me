import { resolve } from "path";
import * as webpack from "webpack";

const projectDir = resolve(__dirname, "..", "..", "..");

function isProd(): boolean {
  return process.env.NODE_ENV.toLowerCase() === "production";
}

function getWebpackConfig(): webpack.Configuration {
  return require(`${projectDir}/webpack.config.js`);
}

export { isProd, getWebpackConfig };
