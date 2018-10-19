"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require("config");
const Path = require("path");
const Log4js = require("log4js");
class Logger {
    static initialize() {
        const configure = Config.util.loadFileConfigs(Path.join(__dirname, "config")).log4js;
        Log4js.configure(configure);
    }
}
Logger.accessLogger = Log4js.getLogger("access");
Logger.LogAccessInfo = (message) => Log4js.getLogger("access").info(message);
Logger.LogAccessWarning = (message) => Log4js.getLogger("access").warn(message);
Logger.LogAccessError = (message) => Log4js.getLogger("access").error(message);
Logger.LogSystemInfo = (message) => Log4js.getLogger("system").info(message);
Logger.LogSystemWarning = (message) => Log4js.getLogger("system").warn(message);
Logger.LogSystemError = (message) => Log4js.getLogger("system").error(message);
Logger.LogError = (message) => Log4js.getLogger("error").error(message);
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map