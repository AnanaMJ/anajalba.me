import { resolve } from "path";
import * as Compression from "compression";
import { Express, Request, Response, static as expressStatic } from "express";
import * as Webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";
import { getWebpackConfig } from "../helpers/config-loader";

const webpackDevConfig = getWebpackConfig();
const compiler = Webpack(webpackDevConfig);
const clientBuildPath = resolve(__dirname, "..", "..", "client");

function setupDevAppRoutes(app: Express): void {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
      stats: {
        colors: true,
      },
    }),
  );
  app.use(webpackHotMiddleware(compiler));

  // all other requests be handled by UI itself
  app.get("*", (req: Request, res: Response) => res.sendFile(resolve(clientBuildPath, "index.html")));
}

function setupProdAppRoutes(app: Express): void {
  app.use(Compression());
  app.use("/", expressStatic(clientBuildPath));

  // all other requests be handled by UI
  app.get("*", (req: Request, res: Response) => res.sendFile(resolve(clientBuildPath, "index.html")));
}

export { setupDevAppRoutes, setupProdAppRoutes };
