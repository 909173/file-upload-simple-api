"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes");
const logger_1 = require("./logger");
class App {
    constructor() {
        this.routePrev = new crmRoutes_1.Routes();
        this.app = express();
        this.config();
        this.routePrev.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use((req, res, next) => {
            logger_1.Logger.LogAccessInfo(`request: ${JSON.stringify(req)}`);
            logger_1.Logger.LogAccessInfo(`response: ${JSON.stringify(res)}`);
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map