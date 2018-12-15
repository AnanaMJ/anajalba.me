import * as Express from "express";
import {isProd} from "./helpers/config-loader";
import {setupDevAppRoutes, setupProdAppRoutes} from "./middleware/app-routes";

const app = Express();

if (isProd()) {
	setupProdAppRoutes(app);
} else {
	setupDevAppRoutes(app);
}

const server = app.listen(3000, () => console.log("Server is listening on port 3000"));
process.on("SIGTERM", () => server.close());
