import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from  "./routes/crmRoutes";
import * as logger  from "./logger";
import * as log4js from "log4js";
import multer = require("multer");
class App {
  public app: express.Application;
  public routePrev: Routes = new Routes();
  constructor() {
    this.app = express();
    this.config();
    this.routePrev.routes(this.app);
    this.app.use(logger.accessConfig);
  }
  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    this.app.use(multer({ dest: "./dist/tmp/" }).array("file", 2));
    this.app.use(bodyParser.urlencoded({limit: "50mb",extended: true}));
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      next();
    })
  }
}
export default new App().app;