import * as Config from "config";
import * as Path from "path";
import * as Log4js from "log4js";

// export class Logger {
//   public static initialize() {
//     const configure = Config.util.loadFileConfigs(Path.join(__dirname,"../config")).log4js;
//     Log4js.configure(configure as Log4js.Configuration);
//   }
//   public static accessConfig = Log4js.connectLogger(this.LogAccessInfo, {level: Log4js.levels.INFO})
//   public static LogAccessInfo = (message: string): void => Log4js.getLogger("access").info(message);
//   public static LogAccessWarning = (message: string): void => Log4js.getLogger("access").warn(message);
//   public static LogAccessError = (message: string): void => Log4js.getLogger("access").error(message);
//   public static LogSystemInfo = (message: string): void => Log4js.getLogger("system").info(message);
//   public static LogSystemWarning = (message: string): void => Log4js.getLogger("system").warn(message);
//   public static LogSystemError = (message: string): void => Log4js.getLogger("system").error(message);
//   public static LogError = (message: string): void => Log4js.getLogger("error").error(message);
// }
Log4js.configure(Config.util.loadFileConfigs(Path.join(__dirname,"../config")).log4js as Log4js.Configuration);
const loggerAccess = Log4js.getLogger("web"),
      loggerErr = Log4js.getLogger("error"),
      loggerSys = Log4js.getLogger("system");

export const accessConfig = ():any => Log4js.connectLogger(loggerAccess, {});

// ログ
export const info = (message: string) => loggerAccess.info(message);
// エラー
export const error = (message: string) => loggerErr.error(message);
// 緊急エラー
export const fatal = (message: string) => loggerErr.fatal(message);